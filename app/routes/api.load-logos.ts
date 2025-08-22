// app/routes/api.load-logos.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server"; // あなたの shopify.server.ts のパスに合わせる

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await shopify.authenticate.admin(request);

  const metafield = await session.api.rest.Metafield.all({
    session,
    namespace: "brand_logo",
    key: "logos",
  });

  if (metafield.data.length > 0) {
    const value = metafield.data[0].value;
    return Response.json(JSON.parse(value));
  }

  return Response.json([]); // デフォルトは空配列
}


