import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
import type { SessionStorage } from "@shopify/shopify-api";

const sessionStorage: SessionStorage = new SQLiteSessionStorage("./database.sqlite");

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(",") || [],
  appUrl: process.env.SHOPIFY_APP_URL!,
  sessionStorage,
});

export const { authenticate } = shopify;
