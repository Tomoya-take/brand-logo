import express, { Request, Response, NextFunction } from "express";
import crypto from "crypto";

const router = express.Router();

// HMAC 検証
function verifyHmac(req: Request, res: Response, next: NextFunction) {
  const hmacHeader = req.get("X-Shopify-Hmac-Sha256") || "";
  const body = req.body as Buffer; // raw body が Buffer で入る

  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET || "")
    .update(body)
    .digest("base64");

  try {
    const valid =
      hmacHeader &&
      crypto.timingSafeEqual(Buffer.from(generatedHash), Buffer.from(hmacHeader));

    if (valid) {
      next();
    } else {
      res.status(401).send("HMAC verification failed");
    }
  } catch (err) {
    res.status(401).send("HMAC verification failed");
  }
}

// --- GDPR 必須 Webhooks ---
router.post("/shop/redact", verifyHmac, (req: Request, res: Response) => {
  console.log("Shop redact webhook received:", req.body.toString("utf8"));
  res.sendStatus(200);
});

router.post("/customers/redact", verifyHmac, (req: Request, res: Response) => {
  console.log("Customer redact webhook received:", req.body.toString("utf8"));
  res.sendStatus(200);
});

router.post("/customers/data_request", verifyHmac, (req: Request, res: Response) => {
  console.log("Customer data request webhook received:", req.body.toString("utf8"));
  res.sendStatus(200);
});

export default router;






