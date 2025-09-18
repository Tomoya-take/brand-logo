// app/routes/webhooks.gdpr.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

/**
 * GDPR Webhooks 受信用エンドポイント
 * TOMLの [[webhooks.subscriptions]] でこのURLを登録しています。
 * 3トピック（customers/data_request, customers/redact, shop/redact）をここで受けます。
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  // 1) HMAC検証 + raw body取り出し
  //    失敗時は内部でエラー→ 401になるので審査要件を満たします
  const { topic, shop, payload } = await authenticate.webhook(request);

  // 2) 即時 200 を返す（本処理は非同期でOK：審査要件）
  queueMicrotask(async () => {
    try {
      switch (topic) {
        case "customers/data_request":
          // ここで、該当顧客のデータ抽出→店主への提供の準備等（保持していなければ何もしないでOK）
          break;
        case "customers/redact":
          // ここで、該当顧客の個人データ削除（保持なしならスキップ）
          break;
        case "shop/redact":
          // ここで、該当ショップに紐づく個人データの全削除（保持なしならスキップ）
          break;
        default:
          // 想定外トピック（通常来ません）
          break;
      }
      // 任意：監査ログ
      console.log("[GDPR]", { topic, shop, payload });
    } catch (e) {
      console.error("[GDPR handler error]", e);
      // すでに200返却済みなので審査には影響しません
    }
  });

  return json({ ok: true }); // ← 即時200
};

// GETは不要。誤アクセス時に405で返す
export const loader = () => new Response("Method Not Allowed", { status: 405 });
