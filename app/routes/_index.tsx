// app/routes/_index.tsx
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import { authenticate } from "~/shopify.server";

// Polaris
import { Page, Layout, Card, BlockStack, Text, Button, InlineStack } from "@shopify/polaris";

// ❌ これらは削除：useAppBridge / Redirect
// import { useAppBridge } from "@shopify/app-bridge-react";
// import { Redirect } from "@shopify/app-bridge/actions";

// --- Loader ---
export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request);
  const shop = session?.shop ?? null;

  // Admin のテーマエディタURLをサーバ側で作る（SSR安全）
  const slug =
    shop && shop.endsWith(".myshopify.com") ? shop.replace(".myshopify.com", "") : null;
  const adminEditorUrl = slug
    ? `https://admin.shopify.com/store/${slug}/themes/current/editor?context=apps`
    : null;

  return json({ shop, adminEditorUrl });
}

// --- 画像アップロード (そのまま)
export async function action({ request }: ActionFunctionArgs) {
  const { session } = await authenticate.admin(request);
  if (!session) throw new Response("Unauthorized", { status: 401 });

  const form = await request.formData();
  const file = form.get("file") as File | null;
  if (!file) return redirect("/?uploaded=0");

  const { shopifyApi } = await import("@shopify/shopify-api");
  const client = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY!,
    apiSecretKey: process.env.SHOPIFY_API_SECRET!,
    apiVersion: "2024-07",
  }).clients.Graphql({ session });

  const staged = await client.query({
    data: {
      query: `
        mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
          stagedUploadsCreate(input: $input) {
            stagedTargets { url resourceUrl parameters { name value } }
            userErrors { field message }
          }
        }`,
      variables: {
        input: [{
          resource: "FILE",
          filename: file.name,
          mimeType: file.type || "image/png",
          httpMethod: "POST",
          fileSize: file.size.toString(),
        }],
      },
    },
  });

  const target = (staged.body as any).data.stagedUploadsCreate.stagedTargets[0];
  const formData = new FormData();
  for (const p of target.parameters) formData.append(p.name, p.value);
  formData.append("file", file);

  const s3res = await fetch(target.url, { method: "POST", body: formData });
  if (!s3res.ok) return redirect("/?uploaded=0");

  const created = await client.query({
    data: {
      query: `
        mutation fileCreate($files: [FileCreateInput!]!) {
          fileCreate(files: $files) {
            files { __typename ... on MediaImage { id image { url } } }
            userErrors { field message }
          }
        }`,
      variables: {
        files: [{ originalSource: target.resourceUrl, contentType: "IMAGE", alt: file.name }],
      },
    },
  });

  const ok = !(created.body as any).data.fileCreate.userErrors?.length;
  return redirect(ok ? "/?uploaded=1" : "/?uploaded=0");
}

// --- UI ---
export default function Index() {
  const { adminEditorUrl } = useLoaderData<typeof loader>();
  const nav = useNavigation();

  return (
    <Page title="Brand Logo List 管理">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="p">このアプリは「オンラインストア → テーマをカスタマイズ」から利用します。</Text>
              <InlineStack gap="300">
                {/* ✅ AppBridgeを使わず、_top でAdminに遷移 */}
                <a href={adminEditorUrl ?? "#"} target="_top" rel="noreferrer">
                  <Button variant="primary" disabled={!adminEditorUrl}>
                    カスタマイズ画面を開く
                  </Button>
                </a>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h3" variant="headingLg">画像アップロード（任意）</Text>
              <Form method="post" encType="multipart/form-data">
                <input type="file" name="file" accept="image/*" />
                <div style={{ marginTop: 12 }}>
                  <Button submit loading={nav.state !== "idle"}>
                    アップロード
                  </Button>
                </div>
              </Form>
              <Text as="p" tone="subdued">※ アップロードした画像は「コンテンツ → ファイル」に保存されます。</Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}






