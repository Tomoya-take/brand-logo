// app/routes/_index.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
import { Page, Layout, Card, BlockStack, Text, Button, InlineStack } from "@shopify/polaris";

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request);
  const shop = session?.shop ?? null;
  const slug = shop?.endsWith(".myshopify.com") ? shop.replace(".myshopify.com", "") : null;
  const editorUrl = slug ? `https://admin.shopify.com/store/${slug}/themes/current/editor` : null; // ← トップを開く
  return json({ editorUrl });
}

export default function Index() {
  const { editorUrl } = useLoaderData<typeof loader>();

  return (
    <Page title="Brand Logo List">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="p" tone="subdued">
                このアプリは「オンラインストア → テーマをカスタマイズ」から利用します。管理画面での設定は不要です。
              </Text>

              <InlineStack gap="300">
                <a href={editorUrl ?? "#"} target="_top" rel="noreferrer">
                  <Button variant="primary" size="large">カスタマイズ画面を開く</Button>
                </a>
              </InlineStack>

              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">使い方（日本語）</Text>
                <ol>
                  <li>オンラインストア → テーマ →「カスタマイズ」をクリック。</li>
                  <li>左サイドバーで「セクションを追加」→「アプリ」→「Brand Logo List」を追加。※セクション、ブロックは複数個追加可能。</li>
                  <li>セクション設定でロゴ画像の追加・リンク設定を行う（必要に応じて）。</li>
                  <li>右上の「保存」をクリックして公開。</li>
                </ol>
                <br>

                <Text as="h3" variant="headingMd">How to use (English)</Text>
                <ol>
                  <li>Go to <i>Online Store → Themes</i> and click <b>Customize</b>.</li>
                  <li>In the left sidebar, click <b>Add section</b> → <b>Apps</b> → add <b>Brand Logo List</b>.*Multiple sections and blocks can be added.</li>
                  <li>Configure the section: upload logos, reorder, and set links as needed.</li>
                  <li>Click <b>Save</b> in the top-right to publish the changes.</li>
                  <li>If editing a draft theme, use <b>Preview</b> first, then set it as the live theme.</li>
                </ol>

              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>

      {/* ここで指定のCSSを適用 */}
      <style>{`
        /* button */
        button {
          color: #fff;
          background: #303030;
          border-radius: 8px;
          border: 1px solid #303030;
          cursor: pointer;
          transition: background-color .2s ease;
        }
        button:hover {
          background: #000;
        }

        /* Polaris-Page */
        .Polaris-Page {
          padding: 0 38px;
          margin-bottom: 38px;
        }

        /* Polaris-BlockStack */
        .Polaris-BlockStack {
          background: #ffffff;
          padding: 19px;
          margin: 19px 0;
          border-radius: 8px;
        }

        /* ol */
        ol {
          margin: 0;
          padding-left: 18px;
          color: #616161;
        }
      `}</style>
    </Page>
  );
}








