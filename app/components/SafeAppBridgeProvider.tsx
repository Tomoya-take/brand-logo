// app/components/SafeAppBridgeProvider.tsx
import React from "react";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

export default function SafeAppBridgeProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: any;
}) {
  if (typeof window === "undefined") {
    // SSR のときは Provider を挟まない
    return <>{children}</>;
  }

  return <AppBridgeProvider config={config}>{children}</AppBridgeProvider>;
}


