import React, { useEffect, useState } from "react";
import { createApp } from "@shopify/app-bridge";
import { authenticatedFetch } from "../utils/authenticatedFetch.js";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Index() {
  const [shop, setShop] = useState<string | null>(null);

  useEffect(() => {
    const host =
      window.__SHOPIFY_HOST__ ||
      new URLSearchParams(window.location.search).get("host") ||
      "";
    const apiKey = window.__SHOPIFY_API_KEY__ || "";

    if (!host) {
      console.error("❌ host が指定されていません");
      return;
    }

    const app = createApp({
      apiKey,
      host,
      forceRedirect: true,
    });

    const fetchWithAuth = authenticatedFetch(app);

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
      <TitleBar title="Brand Logo List App" /> {/* ✅ これを追加 */}

      <h1>Brand Logo List App</h1>
      <p>
        This app can be operated from the customization screen of the online
        store. <br />
        You can add it by selecting <strong>Add Section → Apps → Brand Logo
        List App</strong>.
      </p>

      {shop && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          ✅ Connected to shop: <strong>{shop}</strong>
        </p>
      )}
    </div>
  );
}


