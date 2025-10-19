import 'dotenv/config';
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import * as remixBuild from "./build/index.js";
import { shopify } from "./app/shopify.server"; 
import webhookRouter from "./app/webhooks";
import bodyParser from "body-parser";

// 先頭付近（importの下あたり）に追加
const _origFetch = globalThis.fetch?.bind(globalThis);
if (_origFetch) {
  globalThis.fetch = async (input, init) => {
    const res = await _origFetch(input, init);
    try {
      const url = typeof input === "string" ? input : input.url;
      const method = (init && init.method) || "GET";
      if (url && (/shopify\.com/i.test(url) || /\/admin\/api\//i.test(url))) {
        console.log(`[HTTP] ${method} ${url} -> ${res.status} ${res.statusText}`);
      }
    } catch {}
    return res;
  };
}


const app = express();

// ✅ Shopify Auth ルートを追加
app.use("/auth", shopify.auth.begin());
app.use("/auth/callback", shopify.auth.callback());
app.use("/auth/exit-iframe", shopify.auth.exitIframe());
app.use("/api/*", shopify.validateAuthenticatedSession()); 

// 静的ファイル
app.use(express.static("public"));

// 動作確認用
app.get("/__test", (req, res) => {
  res.send("✅ Express is working");
});

// API endpoint
app.get("/api/test", (req, res) => {
  res.json({ ok: true, host: process.env.HOST || "unknown" });
});

// ✅ Webhook
console.log("✅ webhookRouter loaded:", typeof webhookRouter);
app.use(
  "/webhooks",
  bodyParser.raw({ type: "application/json" }),
  webhookRouter
);

// Remix ハンドラ
app.all(
  "*",
  createRequestHandler({
    build: remixBuild,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});











