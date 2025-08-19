import { shopify } from "~/shopify.server";
export async function loader({ request }) {
    // これも Response を返す（認証成功時はセッション保存、リダイレクト含む）
    return shopify.authenticate.admin(request);
}
