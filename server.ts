import 'dotenv/config';
import express from "express";
import { createRequestHandler } from "@remix-run/express";

// @ts-ignore 型定義が無いので無視
import * as remixBuild from "./build/index.js";

import { shopify } from "./app/shopify.server"; // 必要なら利用

const app = express();

// 静的ファイル (public 配下)
app.use(express.static("public"));

app.get("/__test", (req, res) => {
  res.send("✅ Express is working");
});

// API endpoint の例
app.get("/api/test", (req, res) => {
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
});

// -----------------------------
// ✅ Webhook 用のルート
import webhookRouter from "./app/webhooks";
import bodyParser from "body-parser";
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

app.post("/webhooks/shop/redact", (req, res) => {
  console.log("✅ direct /webhooks/shop/redact HIT");
  res.send("OK");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});







