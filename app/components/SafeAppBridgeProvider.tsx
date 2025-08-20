// app/components/SafeAppBridgeProvider.tsx
import React, { useEffect, useState } from "react";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

export default function SafeAppBridgeProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: any;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ CDNからロードされたappBridgeスクリプトがあるか確認
    if ((window as any).appBridge) {
      console.log("✅ Using CDN App Bridge");
    } else {
      console.log("⚠️ Falling back to npm app-bridge");
    }

    setIsReady(true);
  }, []);

  if (typeof window === "undefined") {
    // SSR のときは Provider を挟まない
    return <>{children}</>;
  }

  // CSR開始後にProviderを有効化
  return isReady ? <AppBridgeProvider config={config}>{children}</AppBridgeProvider> : null;
}




