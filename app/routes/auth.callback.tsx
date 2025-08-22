// app/routes/auth.callback.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

// Shopify OAuth コールバック用ルート
export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/callback loader");

  // コールバックで必ずオンラインセッションを生成
  const { session } = await shopify.auth.callback({
    request,
    isOnline: true,
  });

  console.log("DEBUG: OAuth session =", session);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  // Shopify またはアプリのトップにリダイレクト
  return shopify.redirectToShopifyOrAppRoot(session, request);
}






