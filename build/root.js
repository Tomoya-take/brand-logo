import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/root.tsx
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
export const meta = () => {
    return [{ title: "Brand Logo App" }];
};
export default function App() {
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { children: [_jsx(Outlet, {}), _jsx(ScrollRestoration, {}), _jsx(Scripts, {}), _jsx(LiveReload, {}), _jsx("script", { dangerouslySetInnerHTML: {
                            __html: `
              window.__SHOPIFY_API_KEY__ = "${process.env.SHOPIFY_API_KEY ?? ""}";
            `,
                        } })] })] }));
}
