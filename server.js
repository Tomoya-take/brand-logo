// server.js
require("dotenv").config();

const express = require("express");
const { createRequestHandler } = require("@remix-run/express");
const remixBuild = require("./build/index.js");

// ✅ Shopify 初期化 (shopify.server.ts の default export を利用)
const shopify = require("./app/shopify.server").default;

const app = express();

// ✅ Remix が生成する静的アセット (/public/build/*) を配信
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// ✅ その他の public ファイルも配信
app.use(express.static("public", { maxAge: "1h" }));

// デバッグ用: 現在のセッション確認
app.get("/__sessions", async (req, res) => {
  try {
    const sessions = await shopify.sessionStorage.findSessionsByShop(
      "brand-logo-test.myshopify.com" // ←必要に応じて動的に変更可能
    );
    res.json(sessions);
  } catch (err) {
    console.error("Error fetching sessions:", err);
    res.status(500).json({ error: err.message });
  }
});

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



