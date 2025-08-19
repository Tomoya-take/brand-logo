// app/components/AppBridgeProvider.tsx
import React from "react";
import { Provider } from "@shopify/app-bridge-react";

export default function AppBridgeProvider({ children }: { children: React.ReactNode }) {
  const host =
    window.__SHOPIFY_HOST__ ||
    new URLSearchParams(window.location.search).get("host") ||
    "";
  const apiKey = window.__SHOPIFY_API_KEY__ || "";

  if (!host || !apiKey) {
    console.error("❌ host / apiKey が不足しています");
    return <>{children}</>;
  }

  const config = {
    apiKey,
    host,
    forceRedirect: true,
  };

  return <Provider config={config}>{children}</Provider>;
}
