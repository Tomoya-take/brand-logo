import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { shopify } from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await shopify.auth.callback({ request });

  console.log("DEBUG: OAuth session stored:", session);

  // インストール後にアプリのトップへリダイレクト
  return redirect("/");
}










