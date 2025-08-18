import express from "express";
import * as crypto from "crypto";
const router = express.Router();
// HMAC 検証関数
function verifyHmac(req, res, next) {
    const hmac = req.get("X-Shopify-Hmac-Sha256");
    const body = req.rawBody;
    const generatedHash = crypto
        .createHmac("sha256", process.env.SHOPIFY_API_SECRET || "")
        .update(body, "utf8")
        .digest("base64");
    if (generatedHash === hmac) {
        next();
    }
    else {
        res.status(401).send("HMAC verification failed");
    }
}
// --- Shop redact webhook ---
router.post("/shop/redact", verifyHmac, (req, res) => {
    console.log("Shop redact:", req.body.toString("utf8"));
    res.sendStatus(200);
});
// --- Customers redact webhook ---
router.post("/customers/redact", verifyHmac, (req, res) => {
    console.log("Customer redact:", req.body.toString("utf8"));
    res.sendStatus(200);
});
// --- Customers data request webhook ---
router.post("/customers/data_request", verifyHmac, (req, res) => {
    console.log("Customer data request:", req.body.toString("utf8"));
    res.sendStatus(200);
});
export default router;
