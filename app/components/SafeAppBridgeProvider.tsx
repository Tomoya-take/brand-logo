// app/components/SafeAppBridgeProvider.tsx
import React, { useMemo } from "react";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

export default function SafeAppBridgeProvider({
  children,
  apiKey,
  config,
}: {
  children: React.ReactNode;
  apiKey: string;
  config?: any;
}) {
  if (typeof window === "undefined") {
    return <>{children}</>;
  }

  // host を確実に取得
  const host = new URLSearchParams(window.location.search).get("host");

  // 必要最低限の config を常に渡す
  const finalConfig = useMemo(
    () => ({
      apiKey,
      host,
      forceRedirect: true,
      ...config,
    }),
    [apiKey, host, config]
  );

  return <AppBridgeProvider config={finalConfig}>{children}</AppBridgeProvider>;
}







