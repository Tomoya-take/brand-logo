import express, { Request, Response, NextFunction } from "express";
import crypto from "crypto";

const router = express.Router();

// HMAC 検証関数
function verifyHmac(req: Request, res: Response, next: NextFunction) {
  const hmac = req.get("X-Shopify-Hmac-Sha256") || "";
  const body = req.body as Buffer; // raw body が Buffer

  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET || "")
    .update(body)
    .digest("base64");

  const valid =
    hmac &&
    crypto.timingSafeEqual(Buffer.from(generatedHash), Buffer.from(hmac));

  if (valid) {
    next();
  } else {
    res.status(401).send("HMAC verification failed");
  }
}

// --- GDPR 必須 Webhooks ---
router.post("/shop/redact", verifyHmac, (req: Request, res: Response) => {
  const data = JSON.parse(req.body.toString("utf8"));
  console.log("Shop redact:", data);
  res.sendStatus(200);
});

router.post("/customers/redact", verifyHmac, (req: Request, res: Response) => {
  const data = JSON.parse(req.body.toString("utf8"));
  console.log("Customer redact:", data);
  res.sendStatus(200);
});

router.post("/customers/data_request", verifyHmac, (req: Request, res: Response) => {
  const data = JSON.parse(req.body.toString("utf8"));
  console.log("Customer data request:", data);
  res.sendStatus(200);
});

export default router;





