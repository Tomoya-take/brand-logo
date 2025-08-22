// app/shopify.server.ts
import "@shopify/shopify-app-remix/server/adapters/node";
import { shopifyApp, LATEST_API_VERSION } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";

const dbPath = "/opt/render/project/src/database.sqlite"; // Render上の既存パス
const sessionStorage = new SQLiteSessionStorage(dbPath);

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  appUrl: process.env.HOST!,             // 例: https://brand-logo.onrender.com
  apiVersion: LATEST_API_VERSION,
  scopes: (process.env.SCOPES || "").split(",").filter(Boolean),
  sessionStorage,

  // 埋め込みアプリ＋新認可ストラテジ
  isEmbeddedApp: true,
  future: { unstable_newEmbeddedAuthStrategy: true },
});

export default shopify;









