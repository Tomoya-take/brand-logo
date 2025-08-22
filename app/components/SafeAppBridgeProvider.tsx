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
  const [finalConfig, setFinalConfig] = useState(config);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ host が渡っていない場合、URL から再取得
    if (!config?.host) {
      const params = new URLSearchParams(window.location.search);
      const hostFromUrl = params.get("host");
      if (hostFromUrl) {
        setFinalConfig({ ...config, host: hostFromUrl });
      }
    }

    setIsReady(true);
  }, [config]);

  if (typeof window === "undefined") {
    // SSR のときは Provider を挟まない
    return <>{children}</>;
  }

  return isReady ? (
    <AppBridgeProvider config={finalConfig}>{children}</AppBridgeProvider>
  ) : null;
}






