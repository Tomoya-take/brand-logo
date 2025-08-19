import express from "express";
import { createRequestHandler } from "@remix-run/express";
import * as remixBuild from "@remix-run/node"; // ✅ 修正済み
import { shopify } from "./app/shopify.server"; 

const app = express();

// ✅ auth ミドルウェア修正版
app.get("/api/auth", async (req, res) => {
  return shopify.auth.begin()(req, res);
});

app.get("/api/auth/callback", async (req, res) => {
  return shopify.auth.callback()(req, res);
});

// APIエンドポイント例
app.get("/api/test", async (req, res) => {
  res.json({ ok: true });
});

// Remix handler
app.all(
  "*",
  createRequestHandler({
    build: remixBuild as any,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});




