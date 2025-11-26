// server.js
require("dotenv").config();


const crypto = require("crypto");

// （任意）Shopify向けHTTPログ：410のURL特定に有用
if (globalThis.fetch) {
  const _origFetch = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    const res = await _origFetch(input, init);
    try {
      const url = typeof input === "string" ? input : input.url;
      const method = (init && init.method) || "GET";
      if (url && (/shopify\.com/i.test(url) || /\/admin\/api\//i.test(url))) {
        console.log(`[HTTP] ${method} ${url} -> ${res.status} ${res.statusText}`);
      }
    } catch (_) {}
    return res;
  };
}

// Webhook署名検証
function verifyShopifyWebhook(req, hmacHeader) {
  const secret = process.env.SHOPIFY_API_SECRET || "";
  const digest = crypto.createHmac("sha256", secret).update(req.body).digest("base64");
  try {
    const a = Buffer.from(digest, "utf8");
    const b = Buffer.from(String(hmacHeader || ""), "utf8");
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}


const express = require("express");
const { createRequestHandler } = require("@remix-run/express");
const remixBuild = require("./build/index.js");
const app = express();

// ✅ Remix が生成する静的アセット (/public/build/*) を配信
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// ✅ その他の public ファイルも配信
app.use(express.static("public", { maxAge: "1h" }));

// API endpoint の例
app.get("/api/test", (req, res) => {
  res.json({ ok: true, shop: process.env.SHOPIFY_APP_URL || "unknown" });
});


// GDPR必須Webhook 受信（TOMLのuri=/shopify/webhooks と一致させる）
// app.post("/shopify/webhooks", express.raw({ type: "application/json" }), async (req, res) => {
//   const topic = req.headers["x-shopify-topic"];
//   const shop = req.headers["x-shopify-shop-domain"];
//   const hmac = req.headers["x-shopify-hmac-sha256"];

//   if (!verifyShopifyWebhook(req, hmac)) {
//     console.warn("[webhook] invalid hmac");
//     return res.status(401).send("invalid signature");
//   }

//   let payload = {};
//   try { payload = JSON.parse(req.body.toString("utf8") || "{}"); } catch {}

//   console.log(`[webhook] topic=${topic} shop=${shop} len=${req.body.length}`);

//   try {
//     switch (topic) {
//       case "customers/data_request":
//         // TODO: 顧客データ開示対応（必要ならログ記録等）
//         break;
//       case "customers/redact":
//         // TODO: 顧客データ削除（自アプリDBから該当顧客を削除）
//         break;
//       case "shop/redact":
//         // TODO: ショップ関連データ削除（自アプリDBから該当ショップデータ削除）
//         break;
//       default:
//         // 他トピック（app/uninstalled等）を同URIで受けてもOK
//         break;
//     }
//     return res.status(200).send("ok");
//   } catch (e) {
//     console.error("[webhook] handler error:", e);
//     return res.status(200).send("ok"); // 受理優先
//   }
// });


app.get("/api/check-subscription", async (req, res) => {
  const { shop, accessToken } = req.query; // 実際はセッションやDBから取得
  const query = `
    query {
      currentAppInstallation {
        activeSubscriptions {
          name
          status
        }
      }
    }
  `;
  try {
    const response = await fetch(`https://${shop}/admin/api/2025-07/graphql.json`, { // ← API version を 2025-07 に変更
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    const active = data?.data?.currentAppInstallation?.activeSubscriptions?.length > 0;
    res.json({ active });
  } catch (error) {
    console.error(error);
    res.status(500).json({ active: false, error: error.message });
  }
});
// 課金プラン作成用 API
app.get("/api/create-subscription", async (req, res) => {
  // shop と token を env から固定で取得
  const shop = "test-test-t-manager.myshopify.com";
  const accessToken = process.env.SHOPIFY_ACCESS_TOKEN; // <- env から取得
  const mutation = `
  mutation {
    appSubscriptionCreate(
      name: "Basic Plan",
      lineItems: [{
        plan: {
          appRecurringPricingDetails: { price: { amount: 500, currencyCode: USD } }
        }
      }],
      returnUrl: "https://brand-logo.onrender.com/billing/return"
    ) {
      appSubscription {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
  `;
  try {
    const response = await fetch(`https://${shop}/admin/api/2025-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({ query: mutation }),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// Offline Token 確認用
app.get("/api/show-token", async (req, res) => {
  const shop = "test-test-t-manager.myshopify.com"; // 固定
  const accessToken = process.env.SHOPIFY_ACCESS_TOKEN; // env から取得

  console.log("=== Offline Token ===", accessToken); // Render のログに出力
  res.json({ accessToken: accessToken ? "CHECK LOG" : null });
});




// Remix ハンドラ
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





