// app/routes/auth.tsx
import { LoaderFunctionArgs } from "@remix-run/node";
import { shopify } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return shopify.authenticate.admin(request);
};

