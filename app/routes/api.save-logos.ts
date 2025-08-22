// app/routes/api.save-logos.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function action({ request }: ActionFunctionArgs) {
  const { session } = await shopify.authenticate.admin(request);
  const body = await request.json();

  // JSON文字列として保存
  const metafield = new session.api.rest.Metafield({
    session,
    namespace: "brand_logo",
    key: "logos",
    type: "json",
    value: JSON.stringify(body),
    owner_resource: "shop",
  });

  await metafield.save({ update: true });

  return Response.json({ success: true });
}


