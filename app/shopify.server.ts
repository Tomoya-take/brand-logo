// app/shopify.server.ts
import 'dotenv/config';
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
import fs from "fs";

const dbPath = "/opt/render/project/src/database.sqlite";
console.log("DEBUG: SQLite file path =", dbPath);
console.log("DEBUG: SQLite file exists?", fs.existsSync(dbPath));

const sessionStorage = new SQLiteSessionStorage(dbPath);
console.log("DEBUG: Session storage initialized:", sessionStorage ? "OK" : "NG");

const appUrl = process.env.HOST!;
const hostName = new URL(appUrl).host;

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(",") || [],
  appUrl,
  hostName,
  sessionStorage,

  // 👇 これを追加
  auth: {
    path: "/auth",
    callbackPath: "/auth/callback",
  },
});

export const { authenticate } = shopify;
export default shopify;








