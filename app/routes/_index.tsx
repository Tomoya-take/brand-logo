import React, { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "../utils/authenticatedFetch.js";

export default function Index() {
  const [shop, setShop] = useState<string | null>(null);
  const app = useAppBridge(); // ✅ Provider から AppBridge を取得

  useEffect(() => {
    if (!app) return;

    const fetchWithAuth = authenticatedFetch(app);

    fetchWithAuth("/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setShop(data.shop || null);
      })
      .catch((err) => console.error("API error:", err));
  }, [app]);

  return (
    <div style={{ padding: "2rem" }}>
      {/* ✅ AppBridge コンテキスト内で TitleBar を使える */}
      <TitleBar title="Brand Logo List App" />

      <h1>Brand Logo List App</h1>
      <p>
        This app can be operated from the customization screen of the online
        store. <br />
        You can add it by selecting{" "}
        <strong>Add Section → Apps → Brand Logo List App</strong>.
      </p>

      {shop && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          ✅ Connected to shop: <strong>{shop}</strong>
        </p>
      )}
    </div>
  );
}



