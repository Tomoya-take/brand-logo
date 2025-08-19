// server.js
require("dotenv").config();

const express = require("express");
const { createRequestHandler } = require("@remix-run/express");
// Remix ビルドは CJS 形式なので require で読み込む
const remixBuild = require("./build/index.js");

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

