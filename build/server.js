import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import webhooksRouter from "./webhooks.js";
import * as build from "../build/index.js"; // ← ここを静的importに変更
const app = express();
// Webhook
app.use("/webhooks", express.raw({ type: "application/json" }), (req, res, next) => {
    req.rawBody = req.body.toString("utf8");
    next();
}, webhooksRouter);
// Health check
app.get("/healthz", (req, res) => res.send("ok"));
// Static
app.use(express.static("public"));
// Remix handler
app.all("*", createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
