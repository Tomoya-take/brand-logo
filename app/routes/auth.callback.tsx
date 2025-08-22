// app/routes/auth.callback.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/callback loader"); // 到達確認

  // ✅ コールバック処理（ここでセッションを生成する）
  const { session } = await shopify.auth.callback(request);

  console.log("DEBUG: OAuth session =", session);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  // ✅ 完了後にアプリのトップへ戻す
  return shopify.redirectToShopifyOrAppRoot(session, request);
}









