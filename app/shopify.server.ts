import 'dotenv/config';
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";

const sessionStorage = new SQLiteSessionStorage("./database.sqlite");

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(",") || [],

  // 👇 Render 環境変数 SHOPIFY_APP_URL=https://brand-logo.onrender.com を利用
  appUrl: process.env.SHOPIFY_APP_URL!,
  hostName: process.env.SHOPIFY_APP_URL!.replace(/https?:\/\//, ""), // ← プロトコル除去したドメイン

  sessionStorage,
});

export const { authenticate } = shopify;


