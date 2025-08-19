// app/routes/_index.tsx
import React, { useEffect, useState } from "react";
import { createApp } from "@shopify/app-bridge";
import { authenticatedFetch } from "../utils/authenticatedFetch.js";

export default function Index() {
  const [shop, setShop] = useState<string | null>(null);

  useEffect(() => {
    // ✅ App Bridge 初期化
    const host = new URLSearchParams(window.location.search).get("host") || "";
    const apiKey = window.__SHOPIFY_API_KEY__ || ""; // root.tsx で埋め込んでおく

    const app = createApp({
      apiKey,
      host,
      forceRedirect: true,
    });

    // ✅ 認証付き fetch
    const fetchWithAuth = authenticatedFetch(app);

    // API route 呼び出し
    fetchWithAuth("/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setShop(data.shop || null);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Brand Logo List App</h1>
      <p>
        This app can be operated from the customization screen of the online
        store. <br />
        You can add it by selecting <strong>Add Section → Apps → Brand Logo
        List App</strong>.
      </p>

      {/* APIテストの結果表示 */}
      {shop && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          ✅ Connected to shop: <strong>{shop}</strong>
        </p>
      )}
    </div>
  );
}
