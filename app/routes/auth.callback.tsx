import { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/callback loader"); // 到達確認

  // ⬇️ ここを修正
  const { session } = await shopify.auth.callback({
    isOnline: true,   // オンラインセッション作成
    rawRequest: request,
  });

  console.log("DEBUG: OAuth session =", session);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return shopify.redirectToShopifyOrAppRoot(session, request);
}







