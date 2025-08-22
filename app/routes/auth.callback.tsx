import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/callback loader");

  // ✅ OAuth 完了処理
  const { session } = await shopify.auth.callback(request);

  console.log("DEBUG: OAuth session =", session);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  // ✅ インストール完了後にリダイレクト
  return shopify.redirectToShopifyOrAppRoot(session, request);
}








