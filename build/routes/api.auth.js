import { shopify } from "~/shopify.server";
export async function loader({ request }) {
    // これが Response を返す（リダイレクト含む）
    return shopify.authenticate.admin(request);
}
