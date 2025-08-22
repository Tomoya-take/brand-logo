import 'dotenv/config';
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import * as remixBuild from "./build/index.js";
import { shopify } from "./app/shopify.server"; 
import webhookRouter from "./app/webhooks";
import bodyParser from "body-parser";

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
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
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









