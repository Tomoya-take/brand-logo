// app/shopify.server.ts
import "@shopify/shopify-app-remix/server/adapters/node"; // ✅ 追加: Nodeアダプタ
import "dotenv/config";
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
import fs from "fs";

const dbPath = "/opt/render/project/src/database.sqlite";
console.log("DEBUG: SQLite file path =", dbPath);
console.log("DEBUG: SQLite file exists?", fs.existsSync(dbPath));

const sessionStorage = new SQLiteSessionStorage(dbPath);
console.log("DEBUG: Session storage initialized:", sessionStorage ? "OK" : "NG");

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  appUrl: process.env.HOST!,                               // 例: https://brand-logo.onrender.com
  apiVersion: "2025-07",  
  scopes: (process.env.SCOPES || "").split(",").filter(Boolean),
  sessionStorage,

  // ✅ 埋め込みアプリ + 新しい埋め込み認可ストラテジを有効化
  isEmbeddedApp: true,
  future: { unstable_newEmbeddedAuthStrategy: true },

  // ✅ OAuth ルート（/auth, /auth/callback）
  auth: {
    path: "/auth",
    callbackPath: "/auth/callback",
  },
});

export const { authenticate } = shopify; // 既存コードで使っていればそのまま残す
export default shopify;










