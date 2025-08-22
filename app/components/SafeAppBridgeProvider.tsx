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

  // props から渡された host を最優先、無ければ location.search から拾う
  const urlHost = new URLSearchParams(window.location.search).get("host");
  const host = config?.host || urlHost;

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









