// app/routes/auth/$.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "~/shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // OAuth開始とコールバック完了処理をまとめて面倒見てくれる
  await shopify.authenticate.admin(request);
  // ここに到達するのは “認証後”
  return new Response(null);
}
