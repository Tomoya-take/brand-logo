// app/routes/auth.callback.tsx
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await shopify.authenticate.admin(request);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  // 認証成功後のリダイレクト先
  return redirect("/");
}

