// app/routes/api.save-logos.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);
  const body = await request.json(); // { logos: ["url1","url2",...] }

  const metafield = await admin.rest.Metafield.create({
    owner_resource: "shop",
    namespace: "brand_logo",
    key: "logos",
    type: "json",
    value: JSON.stringify(body),
  });

  return new Response(JSON.stringify(metafield), { status: 200 });
}
