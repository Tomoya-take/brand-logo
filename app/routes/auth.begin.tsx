import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // OAuth 開始
  return shopify.auth.begin(request);
}



