// app/routes/webhooks/shop.redact.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import crypto from "crypto";

function verifyHmac(rawBody: Buffer, hmacHeader: string, secret: string) {
  const digest = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("base64");

  return (
    hmacHeader &&
    crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmacHeader))
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const rawBody = Buffer.from(await request.arrayBuffer());
  const hmacHeader = request.headers.get("X-Shopify-Hmac-Sha256") || "";
  const secret = process.env.SHOPIFY_API_SECRET!;

  if (!verifyHmac(rawBody, hmacHeader, secret)) {
    return new Response("HMAC verification failed", { status: 401 });
  }

  const data = JSON.parse(rawBody.toString("utf-8"));
  console.log("✅ Shop redact webhook:", data);

  return new Response("OK", { status: 200 });
}
