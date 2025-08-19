import React from "react";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

interface Props {
  children: React.ReactNode;
  config?: any;
}

export default function SafeAppBridgeProvider({ children, config }: Props) {
  if (typeof window === "undefined") {
    // SSR 中は AppBridge を初期化せず children だけ返す
    return <>{children}</>;
  }

  return <AppBridgeProvider config={config}>{children}</AppBridgeProvider>;
}
