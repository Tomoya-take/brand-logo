var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var meta = () => [{ title: "Brand Logo App" }];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {}),
      /* @__PURE__ */ jsx2(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.__SHOPIFY_API_KEY__ = "${process.env.SHOPIFY_API_KEY ?? ""}";
            `
          }
        }
      )
    ] })
  ] });
}

// app/routes/api.auth.callback.tsx
var api_auth_callback_exports = {};
__export(api_auth_callback_exports, {
  loader: () => loader
});

// app/shopify.server.ts
import { shopifyApp } from "@shopify/shopify-app-remix";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
var sessionStorage = new SQLiteSessionStorage("./database.sqlite"), shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_SCOPES?.split(",") || [],
  appUrl: process.env.SHOPIFY_APP_URL,
  sessionStorage
}), { authenticate } = shopify;

// app/routes/api.auth.callback.tsx
async function loader({ request }) {
  return shopify.authenticate.admin(request);
}

// app/routes/api.auth.tsx
var api_auth_exports = {};
__export(api_auth_exports, {
  loader: () => loader2
});
async function loader2({ request }) {
  return shopify.authenticate.admin(request);
}

// app/routes/api.test.tsx
var api_test_exports = {};
__export(api_test_exports, {
  loader: () => loader3
});
import { json } from "@remix-run/node";
import { authenticate as authenticate2 } from "~/shopify.server.js";
var loader3 = async ({ request }) => {
  let { session } = await authenticate2.admin(request);
  return json({ shop: session.shop, accessToken: session.accessToken });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect, useState } from "react";
import { createApp } from "@shopify/app-bridge";

// app/utils/authenticatedFetch.ts
import { getSessionToken } from "@shopify/app-bridge-utils";
function authenticatedFetch(app) {
  return async (uri, options = {}) => {
    let token = await getSessionToken(app);
    return options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }, fetch(uri, options);
  };
}

// app/routes/_index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Index() {
  let [shop, setShop] = useState(null);
  return useEffect(() => {
    let host = new URLSearchParams(window.location.search).get("host") || "", apiKey = window.__SHOPIFY_API_KEY__ || "", app = createApp({
      apiKey,
      host,
      forceRedirect: !0
    });
    authenticatedFetch(app)("/api/test").then((res) => res.json()).then((data) => {
      console.log("API response:", data), setShop(data.shop || null);
    }).catch((err) => console.error("API error:", err));
  }, []), /* @__PURE__ */ jsxs2("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ jsx3("h1", { children: "Brand Logo List App" }),
    /* @__PURE__ */ jsxs2("p", { children: [
      "This app can be operated from the customization screen of the online store. ",
      /* @__PURE__ */ jsx3("br", {}),
      "You can add it by selecting ",
      /* @__PURE__ */ jsx3("strong", { children: "Add Section \u2192 Apps \u2192 Brand Logo List App" }),
      "."
    ] }),
    shop && /* @__PURE__ */ jsxs2("p", { style: { marginTop: "1rem", color: "green" }, children: [
      "\u2705 Connected to shop: ",
      /* @__PURE__ */ jsx3("strong", { children: shop })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MOUSWWO5.js", imports: ["/build/_shared/chunk-4U2IBUSB.js", "/build/_shared/chunk-4HXKWYDW.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YVWCIXVT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KFCYN4Y5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth": { id: "routes/api.auth", parentId: "root", path: "api/auth", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth-EZN4JM7U.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.callback": { id: "routes/api.auth.callback", parentId: "routes/api.auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.callback-MXDU65E4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.test": { id: "routes/api.test", parentId: "root", path: "api/test", index: void 0, caseSensitive: void 0, module: "/build/routes/api.test-OSHNWPE2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "6c34cc43", hmr: void 0, url: "/build/manifest-6C34CC43.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.auth.callback": {
    id: "routes/api.auth.callback",
    parentId: "routes/api.auth",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_callback_exports
  },
  "routes/api.auth": {
    id: "routes/api.auth",
    parentId: "root",
    path: "api/auth",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_exports
  },
  "routes/api.test": {
    id: "routes/api.test",
    parentId: "root",
    path: "api/test",
    index: void 0,
    caseSensitive: void 0,
    module: api_test_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
