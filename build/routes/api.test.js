import { json } from "@remix-run/node";
import { authenticate } from "~/shopify.server.js";
export const loader = async ({ request }) => {
    const { session } = await authenticate.admin(request);
    return json({ shop: session.shop, accessToken: session.accessToken });
};
