// app/routes/_index.tsx
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
import { Page, Layout, Card, BlockStack, Text, Button, InlineStack } from "@shopify/polaris";

const APP_HANDLE = "brandlogo";              // ← 触らない
const LISTING_HANDLE = "brandlogo";    // ← Manage listing の Preview URL /apps/◯◯ に合わせる

export async function loader({ request }: LoaderFunctionArgs) {
  const { session, billing, redirect } = await authenticate.admin(request);

  const shop = session?.shop ?? null;
  const slug = shop?.endsWith(".myshopify.com") ? shop.replace(".myshopify.com", "") : null;

  const editorUrl = slug
    ? `https://admin.shopify.com/store/${slug}/themes/current/editor`
    : null;

  // ★ ここだけ変更：listing ハンドルを使う
  const planUrl = slug
    ? `https://admin.shopify.com/store/${slug}/charges/${LISTING_HANDLE}/pricing_plans`
    : null;

  try {
    const { hasActivePayment } = await billing.check();
    if (!hasActivePayment && planUrl) {
      return redirect(planUrl, { target: "_top" });
    }
  } catch {
    // そのまま描画
  }

  return json({ editorUrl, planUrl });
}

export async function action({ request }: ActionFunctionArgs) {
  const { redirect } = await authenticate.admin(request);
  const form = await request.formData();
  const to = String(form.get("to") || "");
  if (!to) return null;
  if (!to.startsWith("https://admin.shopify.com/")) return null;
  return redirect(to, { target: "_top" });
}

export default function Index() {
  const { editorUrl, planUrl } = useLoaderData<typeof loader>();

  return (
    <Page title="Brand Logo List">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              {/* ① MAP プラン管理への導線（文言は変更していません） */}
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">Pricing（プラン選択・変更・解約）</Text>
                <Text as="p" tone="subdued">
                  プランの選択、アップグレード／ダウングレード、解約は
                  Shopifyホストのプラン画面で行えます（課金履歴にも反映されます）。
                </Text>
                <Form method="post">
                  <input type="hidden" name="to" value={planUrl ?? ""} />
                  <Button submit variant="primary" size="large" disabled={!planUrl}>
                    プランを管理する - Manage Plans
                  </Button>
                </Form>
              </BlockStack>

              {/* ② テーマ編集への導線（文言は変更していません） */}
              <BlockStack gap="400">
                <Text as="p" tone="subdued">
                  このアプリは「オンラインストア → テーマをカスタマイズ」から利用します。
                  管理画面での追加設定は不要です。
                </Text>

                <InlineStack gap="300">
                  <a href={editorUrl ?? "#"} target="_top" rel="noreferrer">
                    <Button size="large" disabled={!editorUrl}>
                      カスタマイズ画面を開く - Customize
                    </Button>
                  </a>
                </InlineStack>
              </BlockStack>

              {/* ③ 使い方（日本語 / 英語）— 変更なし */}
              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">使い方（日本語）</Text>
                <ol>
                  <li>オンラインストア → テーマ →「カスタマイズ」をクリック。</li>
                  <li>左サイドバーで「セクションを追加」→「アプリ」→「Brand Logo List」を追加。※セクション、ブロックは複数個追加可能。</li>
                  <li>セクション設定でロゴ画像の追加・リンク設定を行う。</li>
                  <li>右上の「保存」をクリックして公開。</li>
                </ol>

                <div style={{ height: 16 }} />

                <Text as="h3" variant="headingMd">How to use (English)</Text>
                <ol>
                  <li>Go to Online Store → Themes and click Customize.</li>
                  <li>In the left sidebar, click Add section → Apps → add Brand Logo List. *Multiple sections and blocks can be added.</li>
                  <li>Configure: upload logos, reorder, and set links.</li>
                  <li>Click <b>Save</b> to publish.</li>
                </ol>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>

      <style>{`
        button { color:#fff; background:#303030; border-radius:8px; border:1px solid #303030; cursor:pointer; transition:background-color .2s }
        button:hover { background:#000; }
        .Polaris-Button { background:#303030; border:1px solid #303030; border-radius:8px; transition:background-color .2s }
        .Polaris-Button:hover { background:#000; }
        .Polaris-Button span { color:#fff; }
        .Polaris-Page { padding:0 38px; margin-bottom:38px; }
        .Polaris-BlockStack { background:#fff; padding:19px; margin:19px 0; border-radius:8px; }
        ol { margin:0; padding-left:18px; color:#616161; }
      `}</style>
    </Page>
  );
}










