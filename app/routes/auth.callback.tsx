// app/routes/auth.callback.tsx
import { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // コールバック用の処理を必ず使う
  return shopify.authenticate.callback(request);
}

