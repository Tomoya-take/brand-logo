import 'dotenv/config';
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";

const sessionStorage = new SQLiteSessionStorage("./database.sqlite");

const appUrl = process.env.SHOPIFY_APP_URL!;
const hostName = new URL(appUrl).host; // ← https:// を除去して「brand-logo.onrender.com」だけを取得

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(",") || [],
  appUrl,
  hostName,
  sessionStorage,
});

export const { authenticate } = shopify;


export default shopify;



