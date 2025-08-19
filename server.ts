import 'dotenv/config';
import express from "express";
import { createRequestHandler } from "@remix-run/express";

// @ts-ignore 型定義が無いので無視
import * as remixBuild from "./build/index.js";

import { shopify } from "./app/shopify.server"; // 必要なら利用

const app = express();

// 静的ファイル (public 配下)
app.use(express.static("public"));

// API endpoint の例
app.get("/api/test", (req, res) => {
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
});

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






