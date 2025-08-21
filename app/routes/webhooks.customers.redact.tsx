// app/routes/webhooks/customers.redact.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import crypto from "crypto";
import { verifyHmac } from "../utils/verifyHmac";

export async function action({ request }: ActionFunctionArgs) {
  const rawBody = Buffer.from(await request.arrayBuffer());
  const hmacHeader = request.headers.get("X-Shopify-Hmac-Sha256") || "";
  const secret = process.env.SHOPIFY_API_SECRET!;

  if (!verifyHmac(rawBody, hmacHeader, secret)) {
    return new Response("HMAC verification failed", { status: 401 });
  }

  const data = JSON.parse(rawBody.toString("utf-8"));
  console.log("✅ Customer redact webhook:", data);

  return new Response("OK", { status: 200 });
}

