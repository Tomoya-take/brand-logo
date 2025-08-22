// app/routes/auth.login.tsx
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import shopify from "~/shopify.server";

// GET: ログイン画面表示（shopドメイン入力→/auth へ誘導）
export async function loader({ request }: LoaderFunctionArgs) {
  return shopify.login(request);
}

// POST: フォーム送信時の処理（/auth にリダイレクトして OAuth 開始）
export async function action({ request }: ActionFunctionArgs) {
  return shopify.login(request);
}
