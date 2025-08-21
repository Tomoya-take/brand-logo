// app/routes/api.load-logos.ts
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  const result = await admin.rest.Metafield.all({
    namespace: "brand_logo",
    key: "logos",
    owner_resource: "shop",
  });

  if (!result.data[0]) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  return new Response(result.data[0].value, { status: 200 });
}
