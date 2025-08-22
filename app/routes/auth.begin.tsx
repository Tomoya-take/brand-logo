// app/routes/auth.begin.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

// Shopify OAuth 開始用ルート
export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/begin loader");

  // オンラインセッションを要求しつつ、認可画面へリダイレクト
  return shopify.auth.begin({
    shop: new URL(request.url).searchParams.get("shop")!, // ?shop=xxx.myshopify.com
    callbackPath: "/auth/callback",
    isOnline: true,
  });
}
