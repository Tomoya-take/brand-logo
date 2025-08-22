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
              <Text as="h2" variant="headingLg">Brand Logo List 管理</Text>
              <Text as="p" tone="subdued">
                このアプリは「オンラインストア → テーマをカスタマイズ」から利用します。管理画面では設定は不要です。
              </Text>

              <InlineStack gap="300">
                <a href={editorUrl ?? "#"} target="_top" rel="noreferrer">
                  <Button variant="primary" size="large">カスタマイズ画面を開く</Button>
                </a>
                <a
                  href="https://help.shopify.com/ja/manual/online-store/themes/customizing-themes"
                  target="_blank" rel="noreferrer"
                >
                  <Button>テーマカスタマイズのヘルプ</Button>
                </a>
              </InlineStack>

              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">使い方（日本語）</Text>
                <ol style={{ margin: 0, paddingLeft: 18 }}>
                  <li>オンラインストア → テーマ →「カスタマイズ」をクリック。</li>
                  <li>左サイドバーで「セクションを追加」→「アプリ」→「Brand Logo List」を追加。</li>
                  <li>セクション設定でロゴ画像の追加・並び替え・リンク設定を行う（実装に応じて）。</li>
                  <li>右上の「保存」をクリックして公開。</li>
                  <li>下書きテーマで作業中の場合は「プレビュー」で確認→公開に切り替え。</li>
                </ol>

                <Text as="h3" variant="headingMd" tone="subdued">トラブルシュート</Text>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>アプリがセクション一覧に出ない → アプリがインストール済みか／テーマアプリ拡張が有効か確認。</li>
                  <li>権限エラーが出る → アプリを再インストールして権限を再承認。</li>
                </ul>

                <Text as="h3" variant="headingMd">How to use (English)</Text>
                <ol style={{ margin: 0, paddingLeft: 18 }}>
                  <li>Go to <i>Online Store → Themes</i> and click <b>Customize</b>.</li>
                  <li>In the left sidebar, click <b>Add section</b> → <b>Apps</b> → add <b>Brand Logo List</b>.</li>
                  <li>Configure the section: upload logos, reorder, and set links as needed.</li>
                  <li>Click <b>Save</b> in the top-right to publish the changes.</li>
                  <li>If editing a draft theme, use <b>Preview</b> first, then set it as the live theme.</li>
                </ol>

                <Text as="p" tone="subdued">
                  * This admin page is only for guidance. All configuration happens in the Theme Editor.
                </Text>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}







