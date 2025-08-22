import { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("DEBUG: reached /auth/begin loader");

  return shopify.auth.begin({
    shop: new URL(request.url).searchParams.get("shop")!,
    callbackPath: "/auth/callback",
    isOnline: true,
    rawRequest: request,
  });
}

