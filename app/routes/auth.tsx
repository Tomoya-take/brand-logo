import { LoaderFunctionArgs } from "@remix-run/node";
import { shopify } from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return shopify.authenticate.admin(request);
}



