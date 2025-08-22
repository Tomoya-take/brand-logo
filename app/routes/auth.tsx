// app/routes/auth.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server"; // あなたの shopify.server.ts のパスに合わせて調整

export async function loader({ request }: LoaderFunctionArgs) {
  return shopify.authenticate.admin(request);
}
