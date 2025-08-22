require("dotenv").config();

const express = require("express");
const { createRequestHandler } = require("@remix-run/express");
const remixBuild = require("./build/index.js");
const { sessionStorage } = require("./app/shopify.server");

const app = express();

// ✅ Remix が生成する静的アセット (/public/build/*) を配信
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// ✅ その他の public ファイルも配信
app.use(express.static("public", { maxAge: "1h" }));

// API endpoint の例
app.get("/api/test", (req, res) => {
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
});

// ✅ デバッグ: セッション一覧を確認
app.get("/__sessions", async (req, res) => {
  try {
    // SQLite に保存されているセッションを全部取得
    const result = await sessionStorage.store.selectAllSessions();
    res.json(result);
  } catch (err) {
    console.error("❌ Session debug error:", err);
    res.status(500).send("Error reading sessions");
  }
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


