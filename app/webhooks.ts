import express, { Request, Response, NextFunction } from "express";
import * as crypto from "crypto";

const router = express.Router();

// HMAC 検証関数
function verifyHmac(req: Request, res: Response, next: NextFunction) {
  const hmac = req.get("X-Shopify-Hmac-Sha256");
  const body = (req as any).rawBody;

  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET || "")
    .update(body, "utf8")
    .digest("base64");

  if (generatedHash === hmac) {
    next();
  } else {
    res.status(401).send("HMAC verification failed");
  }
}

// --- Shop redact webhook ---
router.post("/shop/redact", verifyHmac, (req: Request, res: Response) => {
  console.log("Shop redact:", req.body.toString("utf8"));
  res.sendStatus(200);
});

// --- Customers redact webhook ---
router.post("/customers/redact", verifyHmac, (req: Request, res: Response) => {
  console.log("Customer redact:", req.body.toString("utf8"));
  res.sendStatus(200);
});

// --- Customers data request webhook ---
router.post("/customers/data_request", verifyHmac, (req: Request, res: Response) => {
  console.log("Customer data request:", req.body.toString("utf8"));
  res.sendStatus(200);
});

export default router;





