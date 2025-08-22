import { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // これが Response を返す（リダイレクト含む）
  return shopify.authenticate.admin(request);
}

