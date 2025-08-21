// app/utils/verifyHmac.ts
import crypto from "crypto";

/**
 * Shopify Webhook の HMAC 検証
 * @param rawBody Webhookリクエストの生データ（Buffer）
 * @param hmacHeader Shopifyから送られる X-Shopify-Hmac-Sha256
 * @param secret アプリの API Secret Key
 */
export function verifyHmac(rawBody: Buffer, hmacHeader: string, secret: string) {
  const digest = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("base64");

  return (
    hmacHeader &&
    crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmacHeader))
  );
}
