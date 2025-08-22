// app/routes/api.auth.exit-iframe.tsx
import { redirect } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export async function loader({ request }: { request: Request }) {
  // iframe内から来るので、authにリダイレクトして再ログイン処理
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  const redirectUrl = new URL("/api/auth", request.url);
  if (shop) {
    redirectUrl.searchParams.set("shop", shop);
  }

  return redirect(redirectUrl.toString());
}
