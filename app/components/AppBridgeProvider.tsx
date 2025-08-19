import React from "react";
import { AppBridgeProvider } from "@shopify/app-bridge-react";

interface Props {
  children: React.ReactNode;
  config?: any;
}

export default function SafeAppBridgeProvider({ children, config }: Props) {
  if (typeof window === "undefined") {
    // SSR中は何もせず、そのまま children を返す
    return <>{children}</>;
  }

  return <AppBridgeProvider config={config}>{children}</AppBridgeProvider>;
}


