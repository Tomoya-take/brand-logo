import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import { Provider } from "@shopify/app-bridge-react"; // ← 追加
export const links = () => {
    return [];
};
export default function App() {
    const host = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("host") || "";
    const apiKey = "9e0bf26577909d0642a6fc4cf844d5bb"; // ← パートナーダッシュボードの Client ID を入れる
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { children: [_jsx(Provider, { config: { apiKey, host }, children: _jsx(Outlet, {}) }), _jsx(ScrollRestoration, {}), _jsx(Scripts, {}), _jsx(LiveReload, {})] })] }));
}
