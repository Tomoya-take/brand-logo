console.log("DEBUG HOST =", process.env.HOST);
console.log("DEBUG SHOPIFY_API_KEY =", process.env.SHOPIFY_API_KEY);

import 'dotenv/config';
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";

const sessionStorage = new SQLiteSessionStorage("./database.sqlite");

const appUrl = process.env.HOST!;
const hostName = new URL(appUrl).host;

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



