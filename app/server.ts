import express from "express";
import { createRequestHandler } from "@remix-run/express";
import * as remixBuild from "../build/index.js";  
import { shopify } from "./shopify.server.js";

const app = express();


// API endpoint
app.get("/api/test", async (req, res) => {
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
});

// Remix handler
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





