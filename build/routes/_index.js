import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/routes/_index.tsx
import { useEffect, useState } from "react";
import { createApp } from "@shopify/app-bridge";
import { authenticatedFetch } from "../utils/authenticatedFetch.js";
export default function Index() {
    const [shop, setShop] = useState(null);
    useEffect(() => {
        // ✅ App Bridge 初期化
        const host = new URLSearchParams(window.location.search).get("host") || "";
        const apiKey = window.__SHOPIFY_API_KEY__ || ""; // root.tsx で埋め込んでおく
        const app = createApp({
            apiKey,
            host,
            forceRedirect: true,
        });
        // ✅ 認証付き fetch
        const fetchWithAuth = authenticatedFetch(app);
        // API route 呼び出し
        fetchWithAuth("/api/test")
            .then((res) => res.json())
            .then((data) => {
            console.log("API response:", data);
            setShop(data.shop || null);
        })
            .catch((err) => console.error("API error:", err));
    }, []);
    return (_jsxs("div", { style: { padding: "2rem" }, children: [_jsx("h1", { children: "Brand Logo List App" }), _jsxs("p", { children: ["This app can be operated from the customization screen of the online store. ", _jsx("br", {}), "You can add it by selecting ", _jsx("strong", { children: "Add Section \u2192 Apps \u2192 Brand Logo List App" }), "."] }), shop && (_jsxs("p", { style: { marginTop: "1rem", color: "green" }, children: ["\u2705 Connected to shop: ", _jsx("strong", { children: shop })] }))] }));
}
