// app/routes/auth.callback.tsx
import { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await shopify.authenticate.admin(request, {
    isOnline: true,   // ✅ オンラインセッションを強制
  });

  console.log("DEBUG: OAuth session =", session); // ✅ セッション確認用ログ

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return shopify.redirectToShopifyOrAppRoot(session, request);
}



