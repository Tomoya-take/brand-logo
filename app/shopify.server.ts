import 'dotenv/config';
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";

const sessionStorage = new SQLiteSessionStorage("./database.sqlite");

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SHOPIFY_SCOPES?.split(",") || [],
  appUrl: process.env.SHOPIFY_APP_URL!,
  sessionStorage,
});

export const { authenticate } = shopify;


