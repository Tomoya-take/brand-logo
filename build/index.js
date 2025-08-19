var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
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
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
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
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Brand Logo App" }];
async function loader({ request }) {
  let url = new URL(request.url);
  return {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || "",
    HOST: url.searchParams.get("host") || ""
  };
}
function App() {
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
      window.__SHOPIFY_API_KEY__ = "${data.SHOPIFY_API_KEY}";
      window.__SHOPIFY_HOST__ = "${data.HOST}";
    `
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 1
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/api.auth.callback.tsx
var api_auth_callback_exports = {};
__export(api_auth_callback_exports, {
  loader: () => loader2
});

// app/shopify.server.ts
var import_config = require("dotenv/config");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/index.mjs
var import_web_api2 = require("@shopify/shopify-api/adapters/web-api"), import_runtime = require("@shopify/shopify-api/runtime"), import_shopify_api21 = require("@shopify/shopify-api");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/types.mjs
var AppDistribution;
(function(AppDistribution2) {
  AppDistribution2.AppStore = "app_store", AppDistribution2.SingleMerchant = "single_merchant", AppDistribution2.ShopifyAdmin = "shopify_admin";
})(AppDistribution || (AppDistribution = {}));
var LoginErrorType;
(function(LoginErrorType2) {
  LoginErrorType2.MissingShop = "MISSING_SHOP", LoginErrorType2.InvalidShop = "INVALID_SHOP";
})(LoginErrorType || (LoginErrorType = {}));

// node_modules/@shopify/shopify-app-remix/dist/esm/server/boundary/error.mjs
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/shopify-app.mjs
var import_web_api = require("@shopify/shopify-api/adapters/web-api"), import_shopify_api20 = require("@shopify/shopify-api");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/version.mjs
var SHOPIFY_REMIX_LIBRARY_VERSION = "3.8.5";

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/register.mjs
function registerWebhooksFactory({ api, logger }) {
  return async function({ session }) {
    return api.webhooks.register({ session }).then((response) => (Object.entries(response).forEach(([topic, topicResults]) => {
      topicResults.forEach(({ success, ...rest }) => {
        success ? logger.debug("Registered webhook", {
          topic,
          shop: session.shop,
          operation: rest.operation
        }) : logger.error("Failed to register webhook", {
          topic,
          shop: session.shop,
          result: JSON.stringify(rest.result)
        });
      });
    }), response)).catch((error) => {
      if ((error.body?.errors?.graphQLErrors || []).find(({ extensions: { code } }) => code === "THROTTLED"))
        logger.error("Failed to register webhooks", {
          shop: session.shop,
          error: JSON.stringify(error)
        });
      else
        throw error;
    });
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/const.mjs
var APP_BRIDGE_URL = "https://cdn.shopify.com/shopifycloud/app-bridge.js", REAUTH_URL_HEADER = "X-Shopify-API-Request-Failure-Reauthorize-Url", RETRY_INVALID_SESSION_HEADER = {
  "X-Shopify-Retry-Invalid-Session-Request": "1"
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/ensure-cors-headers.mjs
function ensureCORSHeadersFactory(params, request, corsHeaders = []) {
  let { logger, config } = params;
  return function(response) {
    let origin = request.headers.get("Origin");
    if (origin && origin !== config.appUrl) {
      logger.debug("Request comes from a different origin, adding CORS headers");
      let corsHeadersSet = /* @__PURE__ */ new Set([
        "Authorization",
        "Content-Type",
        ...corsHeaders
      ]);
      response.headers.set("Access-Control-Allow-Origin", "*"), response.headers.set("Access-Control-Allow-Headers", [...corsHeadersSet].join(", ")), response.headers.set("Access-Control-Expose-Headers", REAUTH_URL_HEADER);
    }
    return response;
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-bounce-page.mjs
var import_server_runtime = require("@remix-run/server-runtime"), redirectToBouncePage = (params, url) => {
  let { config } = params, searchParams = url.searchParams;
  throw searchParams.delete("id_token"), searchParams.set("shopify-reload", `${config.appUrl}${url.pathname}?${searchParams.toString()}`), (0, import_server_runtime.redirect)(`${config.auth.patchSessionTokenPath}?${searchParams.toString()}`);
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/respond-to-invalid-session-token.mjs
function respondToInvalidSessionToken({ params, request, retryRequest = !1 }) {
  let { api, logger, config } = params;
  if (!request.headers.get("authorization"))
    return redirectToBouncePage({ config }, new URL(request.url));
  throw new Response(void 0, {
    status: 401,
    statusText: "Unauthorized",
    headers: retryRequest ? RETRY_INVALID_SESSION_HEADER : {}
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/get-shop-from-request.mjs
function getShopFromRequest(request) {
  return new URL(request.url).searchParams.get("shop");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/validate-session-token.mjs
async function validateSessionToken(params, request, token, { checkAudience = !0, retryRequest = !0 } = {}) {
  let { api, logger } = params, shop = getShopFromRequest(request);
  logger.debug("Validating session token", { shop });
  try {
    let payload = await api.session.decodeSessionToken(token, {
      checkAudience
    });
    return logger.debug("Session token is valid - validated", {
      shop,
      payload: JSON.stringify(payload)
    }), payload;
  } catch (error) {
    throw logger.debug(`Failed to validate session token: ${error.message}`, {
      shop
    }), respondToInvalidSessionToken({ params, request, retryRequest });
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/get-session-token-header.mjs
var SESSION_TOKEN_PARAM = "id_token";
function getSessionTokenHeader(request) {
  return request.headers.get("authorization")?.replace("Bearer ", "");
}
function getSessionTokenFromUrlParam(request) {
  return new URL(request.url).searchParams.get(SESSION_TOKEN_PARAM);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/reject-bot-request.mjs
var import_isbot = require("isbot"), SHOPIFY_POS_USER_AGENT = /Shopify POS\//, SHOPIFY_MOBILE_USER_AGENT = /Shopify Mobile\//, SHOPIFY_USER_AGENTS = [SHOPIFY_POS_USER_AGENT, SHOPIFY_MOBILE_USER_AGENT];
function respondToBotRequest({ logger }, request) {
  let userAgent = request.headers.get("User-Agent") ?? "";
  if (SHOPIFY_USER_AGENTS.some((agent) => agent.test(userAgent))) {
    logger.debug("Request is from a Shopify agent, allow");
    return;
  }
  if ((0, import_isbot.isbot)(userAgent))
    throw logger.debug("Request is from a bot, skipping auth"), new Response(void 0, { status: 410, statusText: "Gone" });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/respond-to-options-request.mjs
function respondToOptionsRequest(params, request, corsHeaders) {
  if (request.method === "OPTIONS")
    throw ensureCORSHeadersFactory(params, request, corsHeaders)(new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Max-Age": "7200"
      }
    }));
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/authenticate.mjs
var import_server_runtime14 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/cancel.mjs
var import_shopify_api = require("@shopify/shopify-api"), import_server_runtime3 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/begin-auth.mjs
async function beginAuth(params, request, isOnline, shop) {
  let { api, config } = params;
  throw await api.auth.begin({
    shop,
    callbackPath: config.auth.callbackPath,
    isOnline,
    rawRequest: request
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-with-exitiframe.mjs
var import_server_runtime2 = require("@remix-run/server-runtime");
function redirectWithExitIframe(params, request, shop) {
  let { api, config } = params, queryParams = new URL(request.url).searchParams, host = api.utils.sanitizeHost(queryParams.get("host"));
  queryParams.set("shop", shop);
  let destination = `${config.auth.path}?shop=${shop}`;
  throw host && (queryParams.set("host", host), destination = `${destination}&host=${host}`), queryParams.set("exitIframe", destination), (0, import_server_runtime2.redirect)(`${config.auth.exitIframePath}?${queryParams.toString()}`);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-with-app-bridge-headers.mjs
function redirectWithAppBridgeHeaders(redirectUri) {
  throw new Response(void 0, {
    status: 401,
    statusText: "Unauthorized",
    headers: getAppBridgeHeaders(redirectUri)
  });
}
function getAppBridgeHeaders(url) {
  return new Headers({ [REAUTH_URL_HEADER]: url });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-auth-page.mjs
async function redirectToAuthPage(params, request, shop, isOnline = !1) {
  let { config } = params, isEmbeddedRequest2 = new URL(request.url).searchParams.get("embedded") === "1";
  if (request.headers.get("authorization")) {
    let redirectUri = new URL(config.auth.path, config.appUrl);
    redirectUri.searchParams.set("shop", shop), redirectWithAppBridgeHeaders(redirectUri.toString());
  } else if (isEmbeddedRequest2)
    redirectWithExitIframe(params, request, shop);
  else
    throw await beginAuth(params, request, isOnline, shop);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/invalidate-access-token.mjs
async function invalidateAccessToken(params, session) {
  let { logger, config } = params;
  logger.debug(`Invalidating access token for session - ${session.id}`, {
    shop: session.shop
  }), session.accessToken = void 0, await config.sessionStorage.storeSession(session);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/cancel.mjs
var import_isbot2 = require("isbot");
function cancelBillingFactory(params, request, session) {
  return async function(options) {
    let { api, logger } = params;
    logger.debug("Cancelling billing", { shop: session.shop, ...options });
    try {
      return await api.billing.cancel({
        session,
        subscriptionId: options.subscriptionId,
        isTest: options.isTest,
        prorate: options.prorate
      });
    } catch (error) {
      throw error instanceof import_shopify_api.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/require.mjs
var import_shopify_api2 = require("@shopify/shopify-api"), import_server_runtime4 = require("@remix-run/server-runtime");
var import_isbot3 = require("isbot");
function requireBillingFactory(params, request, session) {
  let { api, logger } = params;
  return async function(options) {
    let logContext = {
      shop: session.shop,
      plans: options.plans,
      isTest: options.isTest
    };
    logger.debug("Checking billing for the shop", logContext);
    let data;
    try {
      data = await api.billing.check({
        session,
        plans: options.plans,
        isTest: options.isTest,
        returnObject: !0
      });
    } catch (error) {
      throw error instanceof import_shopify_api2.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", logContext), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
    if (!data.hasActivePayment)
      throw logger.debug("Billing check failed", logContext), await options.onFailure(new Error("Billing check failed"));
    return logger.debug("Billing check succeeded", logContext), data;
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/request.mjs
var import_shopify_api4 = require("@shopify/shopify-api"), import_server_runtime6 = require("@remix-run/server-runtime");
var import_isbot4 = require("isbot");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/helpers.mjs
var import_server_runtime5 = require("@remix-run/server-runtime"), import_shopify_api3 = require("@shopify/shopify-api");
function redirectOutOfApp(params, request, url, shop) {
  let { config, logger } = params;
  logger.debug("Redirecting out of app", { shop, url });
  let requestUrl = new URL(request.url), isEmbeddedRequest2 = requestUrl.searchParams.get("embedded") === "1";
  if (request.headers.get("authorization"))
    throw new Response(void 0, {
      status: 401,
      statusText: "Unauthorized",
      headers: getAppBridgeHeaders(url)
    });
  if (isEmbeddedRequest2) {
    let params2 = new URLSearchParams({
      shop,
      host: requestUrl.searchParams.get("host"),
      exitIframe: url
    });
    throw (0, import_server_runtime5.redirect)(`${config.auth.exitIframePath}?${params2.toString()}`);
  } else
    throw (0, import_server_runtime5.redirect)(url);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/request.mjs
function requestBillingFactory(params, request, session) {
  return async function({ plan, isTest, returnUrl, ...overrides }) {
    let { api, logger } = params;
    logger.info("Requesting billing", {
      shop: session.shop,
      plan,
      isTest,
      returnUrl
    });
    let result;
    try {
      result = await api.billing.request({
        plan,
        session,
        isTest,
        returnUrl,
        returnObject: !0,
        ...overrides
      });
    } catch (error) {
      throw error instanceof import_shopify_api4.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
    throw redirectOutOfApp(params, request, result.confirmationUrl, session.shop);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/check.mjs
var import_shopify_api5 = require("@shopify/shopify-api"), import_server_runtime7 = require("@remix-run/server-runtime");
var import_isbot5 = require("isbot");
function checkBillingFactory(params, request, session) {
  return async function(options = {}) {
    let { api, logger } = params;
    logger.debug("Checking billing plans", { shop: session.shop, ...options });
    try {
      return await api.billing.check({
        session,
        plans: options.plans,
        isTest: options.isTest,
        returnObject: !0
      });
    } catch (error) {
      throw error instanceof import_shopify_api5.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/create-usage-record.mjs
var import_shopify_api6 = require("@shopify/shopify-api"), import_server_runtime8 = require("@remix-run/server-runtime");
var import_isbot6 = require("isbot");
function createUsageRecordFactory(params, request, session) {
  return async function(options) {
    let { api, logger } = params;
    logger.debug("Create usage record", { shop: session.shop, ...options });
    try {
      return await api.billing.createUsageRecord({
        ...options,
        session
      });
    } catch (error) {
      throw error instanceof import_shopify_api6.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/update-usage-subscription-capped-amount.mjs
var import_shopify_api7 = require("@shopify/shopify-api"), import_server_runtime9 = require("@remix-run/server-runtime");
var import_isbot7 = require("isbot");
function updateUsageCappedAmountFactory(params, request, session) {
  return async function(options) {
    let { api, logger } = params;
    logger.debug("Updating usage subscription capped amount", {
      shop: session.shop,
      ...options
    });
    let result;
    try {
      result = await api.billing.updateUsageCappedAmount({
        session,
        subscriptionLineItemId: options.subscriptionLineItemId,
        cappedAmount: options.cappedAmount
      });
    } catch (error) {
      throw error instanceof import_shopify_api7.HttpResponseError && error.response.code === 401 ? (logger.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await invalidateAccessToken(params, session), await redirectToAuthPage(params, request, session.shop)) : error;
    }
    throw redirectOutOfApp(params, request, result.confirmationUrl, session.shop);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/graphql.mjs
function graphqlClientFactory({ params, handleClientError, session }) {
  return async function(operation, options) {
    let client = new params.api.clients.Graphql({
      session,
      apiVersion: options?.apiVersion
    });
    try {
      let apiResponse = await client.request(operation, {
        variables: options?.variables,
        retries: options?.tries ? options.tries - 1 : 0,
        headers: options?.headers,
        signal: options?.signal
      });
      return new Response(JSON.stringify(apiResponse));
    } catch (error) {
      throw handleClientError ? await handleClientError({ error, params, session }) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/rest.mjs
function restClientFactory({ params, handleClientError, session }) {
  let { api } = params, client = new RemixRestClient({
    params,
    handleClientError,
    session
  });
  if (api.rest) {
    client.resources = {};
    let RestResourceClient = restResourceClientFactory({
      params,
      handleClientError,
      session
    });
    Object.entries(api.rest).forEach(([name, resource]) => {
      class RemixResource extends resource {
        static Client = RestResourceClient;
      }
      Reflect.defineProperty(RemixResource, "name", {
        value: name
      }), Reflect.set(client.resources, name, RemixResource);
    });
  }
  return client;
}
var RemixRestClient = class {
  session;
  params;
  handleClientError;
  constructor({ params, session, handleClientError }) {
    this.params = params, this.handleClientError = handleClientError, this.session = session;
  }
  /**
   * Performs a GET request on the given path.
   *
   * @deprecated In a future major release REST will be removed from this package. Please see [all-in on graphql](https://www.shopify.com/ca/partners/blog/all-in-on-graphql).
   */
  async get(params) {
    return this.makeRequest({
      method: "GET",
      ...params
    });
  }
  /**
   * Performs a POST request on the given path.
   *
   * @deprecated In a future major release REST will be removed from this package. Please see [all-in on graphql](https://www.shopify.com/ca/partners/blog/all-in-on-graphql).
   */
  async post(params) {
    return this.makeRequest({
      method: "POST",
      ...params
    });
  }
  /**
   * Performs a PUT request on the given path.
   *
   * @deprecated In a future major release REST will be removed from this package. Please see [all-in on graphql](https://www.shopify.com/ca/partners/blog/all-in-on-graphql).
   */
  async put(params) {
    return this.makeRequest({
      method: "PUT",
      ...params
    });
  }
  /**
   * Performs a DELETE request on the given path.
   *
   * @deprecated In a future major release REST will be removed from this package. Please see [all-in on graphql](https://www.shopify.com/ca/partners/blog/all-in-on-graphql).
   */
  async delete(params) {
    return this.makeRequest({
      method: "DELETE",
      ...params
    });
  }
  async makeRequest(params) {
    let originalClient = new this.params.api.clients.Rest({
      session: this.session
    }), originalRequest = Reflect.get(originalClient, "request");
    try {
      let apiResponse = await originalRequest.call(originalClient, params);
      return new Response(JSON.stringify(apiResponse.body), {
        headers: apiResponse.headers
      });
    } catch (error) {
      throw this.handleClientError ? await this.handleClientError({
        error,
        session: this.session,
        params: this.params
      }) : new Error(error);
    }
  }
};
function restResourceClientFactory({ params, handleClientError, session }) {
  let { api } = params, ApiClient = api.clients.Rest;
  return class extends ApiClient {
    async request(requestParams) {
      let originalClient = new api.clients.Rest({ session }), originalRequest = Reflect.get(originalClient, "request");
      try {
        return await originalRequest.call(originalClient, requestParams);
      } catch (error) {
        throw handleClientError ? await handleClientError({ error, params, session }) : new Error(error);
      }
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/factory.mjs
function adminClientFactory({ params, handleClientError, session }) {
  return params.config.future.removeRest ? {
    graphql: graphqlClientFactory({ params, session, handleClientError })
  } : {
    rest: restClientFactory({
      params,
      session,
      handleClientError
    }),
    graphql: graphqlClientFactory({ params, session, handleClientError })
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/create-admin-api-context.mjs
function createAdminApiContext(session, params, handleClientError) {
  return adminClientFactory({
    session,
    params,
    handleClientError
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-shopify-or-app-root.mjs
var import_server_runtime10 = require("@remix-run/server-runtime");
async function redirectToShopifyOrAppRoot(request, params, responseHeaders) {
  let { api } = params, url = new URL(request.url), host = api.utils.sanitizeHost(url.searchParams.get("host")), shop = api.utils.sanitizeShop(url.searchParams.get("shop")), redirectUrl = api.config.isEmbeddedApp ? await api.auth.getEmbeddedAppUrl({ rawRequest: request }) : `/?shop=${shop}&host=${encodeURIComponent(host)}`;
  throw (0, import_server_runtime10.redirect)(redirectUrl, { headers: responseHeaders });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/ensure-app-is-embedded-if-required.mjs
var ensureAppIsEmbeddedIfRequired = async (params, request) => {
  let { api, logger, config } = params, url = new URL(request.url), shop = url.searchParams.get("shop");
  api.config.isEmbeddedApp && url.searchParams.get("embedded") !== "1" && (logger.debug("App is not embedded, redirecting to Shopify", { shop }), await redirectToShopifyOrAppRoot(request, { api }));
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/ensure-session-token-search-param-if-required.mjs
var SESSION_TOKEN_PARAM2 = "id_token", ensureSessionTokenSearchParamIfRequired = async (params, request) => {
  let { api, logger } = params, url = new URL(request.url), shop = url.searchParams.get("shop"), searchParamSessionToken = url.searchParams.get(SESSION_TOKEN_PARAM2), isEmbedded = url.searchParams.get("embedded") === "1";
  api.config.isEmbeddedApp && isEmbedded && !searchParamSessionToken && (logger.debug("Missing session token in search params, going to bounce page", { shop }), redirectToBouncePage(params, url));
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/authenticate.mjs
var import_shopify_api11 = require("@shopify/shopify-api");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect.mjs
var import_server_runtime11 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/app-bridge-url.mjs
var appBridgeUrlOverride;
function appBridgeUrl() {
  return appBridgeUrlOverride || APP_BRIDGE_URL;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/add-response-headers.mjs
function addDocumentResponseHeadersFactory(params) {
  let { api, config } = params;
  return function(request, headers) {
    let { searchParams } = new URL(request.url), shop = api.utils.sanitizeShop(searchParams.get("shop"));
    addDocumentResponseHeaders(headers, config.isEmbeddedApp, shop);
  };
}
function addDocumentResponseHeaders(headers, isEmbeddedApp, shop) {
  shop && headers.set("Link", '<https://cdn.shopify.com/shopifycloud/app-bridge.js>; rel="preload"; as="script";'), isEmbeddedApp ? shop && headers.set("Content-Security-Policy", `frame-ancestors https://${shop} https://admin.shopify.com https://*.spin.dev https://admin.myshopify.io https://admin.shop.dev;`) : headers.set("Content-Security-Policy", "frame-ancestors 'none';");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/validate-redirect-url.mjs
var import_shopify_api8 = require("@shopify/shopify-api"), FILE_URI_MATCH = /\/\/\//, INVALID_RELATIVE_URL = /[/\\][/\\]/, WHITESPACE_CHARACTER = /\s/, VALID_PROTOCOLS = ["https:", "http:"];
function isSafe(domain, redirectUrl, requireSSL = !0) {
  if (typeof redirectUrl != "string" || FILE_URI_MATCH.test(redirectUrl) || WHITESPACE_CHARACTER.test(redirectUrl))
    return !1;
  let url;
  try {
    url = new URL(redirectUrl, domain);
  } catch {
    return !1;
  }
  return !(INVALID_RELATIVE_URL.test(url.pathname) || !VALID_PROTOCOLS.includes(url.protocol) || requireSSL && url.protocol !== "https:");
}
function sanitizeRedirectUrl(domain, redirectUrl, options = {}) {
  if (isSafe(domain, redirectUrl, options.requireSSL))
    return new URL(redirectUrl, domain);
  if (options.throwOnInvalid === !1)
    return;
  throw new import_shopify_api8.ShopifyError("Invalid URL. Refusing to redirect");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/render-app-bridge.mjs
function renderAppBridge({ config }, request, redirectTo) {
  let redirectToScript = "";
  if (redirectTo) {
    let destination = sanitizeRedirectUrl(config.appUrl, redirectTo.url), target = redirectTo.target ?? "_top";
    redirectToScript = `<script>window.open(${JSON.stringify(destination.toString())}, ${JSON.stringify(target)})</script>`;
  }
  let responseHeaders = new Headers({
    "content-type": "text/html;charset=utf-8"
  });
  throw addDocumentResponseHeaders(responseHeaders, config.isEmbeddedApp, new URL(request.url).searchParams.get("shop")), new Response(`
      <script data-api-key="${config.apiKey}" src="${appBridgeUrl()}"></script>
      ${redirectToScript}
    `, { headers: responseHeaders });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect.mjs
function redirectFactory(params, request, shop) {
  let { config, logger } = params;
  return function(url, init) {
    let { searchParams } = new URL(request.url), { url: parsedUrl, target } = parseURL({
      params,
      url,
      base: config.appUrl,
      shop,
      init
    });
    if (logger.debug("Redirecting", { shop, url: parsedUrl.toString() }), (parsedUrl.origin === config.appUrl || url.startsWith("/")) && searchParams.forEach((value, key) => {
      parsedUrl.searchParams.has(key) || parsedUrl.searchParams.set(key, value);
    }), target === "_self") {
      if (isBounceRequest(request))
        throw renderAppBridge(params, request, {
          url: parsedUrl.toString(),
          target
        });
      return (0, import_server_runtime11.redirect)(parsedUrl.toString(), init);
    } else {
      if (isDataRequest(request))
        throw redirectWithAppBridgeHeaders(parsedUrl.toString());
      if (isEmbeddedRequest(request))
        throw renderAppBridge(params, request, {
          url: parsedUrl.toString(),
          target
        });
    }
    return (0, import_server_runtime11.redirect)(url, init);
  };
}
function isBounceRequest(request) {
  return Boolean(getSessionTokenHeader(request)) && request.headers.has("X-Shopify-Bounce");
}
function isDataRequest(request) {
  let isGet = request.method === "GET";
  return Boolean(getSessionTokenHeader(request)) && !isBounceRequest(request) && (!isEmbeddedRequest(request) || !isGet);
}
function isEmbeddedRequest(request) {
  let { searchParams } = new URL(request.url);
  return searchParams.get("embedded") === "1";
}
function parseURL({ params, base, init, shop, url }) {
  let target = typeof init != "number" && init?.target ? init.target : void 0;
  if (isAdminRemotePath(url)) {
    let { config } = params, adminPath = getAdminRemotePath(url), cleanShopName = shop.replace(".myshopify.com", "");
    return target || (target = config.isEmbeddedApp ? "_parent" : "_self"), {
      url: new URL(`https://admin.shopify.com/store/${cleanShopName}${adminPath}`),
      target
    };
  } else
    return {
      url: new URL(url, base),
      target: target ?? "_self"
    };
}
var ADMIN_REGEX = /^shopify:\/*admin\//i;
function isAdminRemotePath(url) {
  return ADMIN_REGEX.test(url);
}
function getAdminRemotePath(url) {
  return removeRestrictedParams(new URL(url)).href.replace(ADMIN_REGEX, "/");
}
var embeddedFrameParamsToRemove = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "id_token",
  "shop",
  "timestamp",
  "host",
  "embedded",
  // sent when clicking rel="home" nav item
  "appLoadId"
];
function removeRestrictedParams(url) {
  let newUrl = new URL(url);
  return embeddedFrameParamsToRemove.forEach((param) => newUrl.searchParams.delete(param)), newUrl;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/validate-shop-and-host-params.mjs
var import_server_runtime12 = require("@remix-run/server-runtime");
function validateShopAndHostParams(params, request) {
  let { api, config, logger } = params;
  if (config.isEmbeddedApp) {
    let url = new URL(request.url), shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
    if (!shop)
      throw logger.debug("Missing or invalid shop, redirecting to login path", {
        shop
      }), redirectToLoginPath(request, params);
    if (!api.utils.sanitizeHost(url.searchParams.get("host")))
      throw logger.debug("Invalid host, redirecting to login path", {
        shop,
        host: url.searchParams.get("host")
      }), redirectToLoginPath(request, params);
  }
}
function redirectToLoginPath(request, params) {
  let { config, logger } = params, { pathname } = new URL(request.url);
  if (pathname === config.auth.loginPath) {
    let message = `Detected call to shopify.authenticate.admin() from configured login path ('${config.auth.loginPath}'), please make sure to call shopify.login() from that route instead.`;
    throw logger.debug(message), new Response(message, { status: 500 });
  }
  throw (0, import_server_runtime12.redirect)(config.auth.loginPath);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/request.mjs
var import_shopify_api9 = require("@shopify/shopify-api");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-install-page.mjs
var import_server_runtime13 = require("@remix-run/server-runtime");
async function redirectToInstallPage(params, shop, optionalScopes = []) {
  let installUrl = buildInstallUrl(params, shop, optionalScopes);
  throw params.config.isEmbeddedApp ? redirectWithAppBridgeHeaders(installUrl) : (0, import_server_runtime13.redirect)(installUrl);
}
function buildInstallUrl(params, shop, optionalScopes = []) {
  let baseInstallUrl = buildBaseInstallUrl(params, shop);
  return baseInstallUrl.search = buildParamsInstallUrl(params, optionalScopes).toString(), baseInstallUrl.href;
}
function buildBaseInstallUrl({ api }, shop) {
  let cleanShop = api.utils.sanitizeShop(shop, !0);
  return new URL(`https://${cleanShop}/admin/oauth/install`);
}
function buildParamsInstallUrl({ config }, optionalScopes = []) {
  let optionalScopesParam = optionalScopes && optionalScopes.length > 0 ? { optional_scopes: optionalScopes.join(",") } : void 0, query = {
    client_id: config.apiKey,
    scope: config.scopes?.toString() || "",
    ...optionalScopesParam
  };
  return new URLSearchParams(query);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/client/fetch-scopes-details.mjs
var FETCH_SCOPES_DETAIL_QUERY = `#graphql
query FetchAccessScopes{
  app {
    requestedAccessScopes {
      handle
    }
    optionalAccessScopes {
      handle
    }
    installation {
      accessScopes {
        handle
      }
    }
  }
}`;
async function fetchScopeDetail(admin) {
  return (await (await admin.graphql(FETCH_SCOPES_DETAIL_QUERY)).json()).data;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/request.mjs
function requestScopesFactory(params, session, admin) {
  return async function(scopes) {
    let { logger } = params;
    if (logger.debug("Requesting optional scopes: ", { shop: session.shop, scopes }), scopes.length !== 0 && !await alreadyGranted(scopes, admin))
      throw await redirectToInstallPage(params, session.shop, scopes);
  };
  async function alreadyGranted(scopes, admin2) {
    let grantedScopes = (await fetchScopeDetail(admin2)).app.installation.accessScopes.map((scope) => scope.handle);
    return new import_shopify_api9.AuthScopes(grantedScopes).has(scopes);
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/query.mjs
var import_shopify_api10 = require("@shopify/shopify-api");
function queryScopesFactory(params, session, admin) {
  return async function() {
    let { logger } = params;
    logger.debug("Querying scopes details: ", {
      shop: session.shop
    });
    let scopesDetail = await fetchScopeDetail(admin);
    return mapFetchScopeDetail(scopesDetail);
  };
}
function mapFetchScopeDetail(scopesDetailResponse) {
  let appInformation = scopesDetailResponse.app, granted = new import_shopify_api10.AuthScopes(appInformation.installation.accessScopes.map((scope) => scope.handle)).toArray(!0), required = new import_shopify_api10.AuthScopes(appInformation.requestedAccessScopes.map((scope) => scope.handle)).toArray(!0), optional = new import_shopify_api10.AuthScopes(appInformation.optionalAccessScopes.map((scope) => scope.handle)).toArray(!0);
  return {
    granted,
    required,
    optional
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/client/revoke-scopes.mjs
var REVOKE_SCOPE_MUTATION = `#graphql
mutation AppRevokeAccessScopes($scopes: [String!]!) {
  appRevokeAccessScopes(scopes: $scopes){
    revoked {
      handle
    }
    userErrors {
      field
      message
    }
  }
}`;
async function revokeScopes(admin, scopes) {
  return (await (await admin.graphql(REVOKE_SCOPE_MUTATION, {
    variables: {
      scopes
    }
  })).json()).data.appRevokeAccessScopes;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/revoke.mjs
function revokeScopesFactory(params, session, admin) {
  return async function(scopes) {
    let { logger } = params;
    await validateScopes(scopes), logger.debug("Revoke scopes: ", {
      shop: session.shop,
      scopes
    });
    let revokeScopesResult = await revokeScopes(admin, scopes);
    if (revokeScopesResult.userErrors?.length > 0)
      throw logger.error("Failed to revoke scopes: ", {
        shop: session.shop,
        errors: revokeScopesResult.userErrors
      }), new Response(JSON.stringify(revokeScopesResult.userErrors), {
        status: 422,
        headers: {
          "Content-Type": "application/json"
        }
      });
    return {
      revoked: revokeScopesResult.revoked.map((scope) => scope.handle)
    };
  };
}
async function validateScopes(scopes) {
  if (!scopes || scopes.length === 0)
    throw new Response("No scopes provided", { status: 400 });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/scope/factory.mjs
function scopesApiFactory(params, session, admin) {
  return {
    query: queryScopesFactory(params, session, admin),
    request: requestScopesFactory(params, session, admin),
    revoke: revokeScopesFactory(params, session, admin)
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/authenticate.mjs
function authStrategyFactory({ strategy, ...params }) {
  let { api, logger, config } = params;
  async function respondToBouncePageRequest(request) {
    if (new URL(request.url).pathname === config.auth.patchSessionTokenPath)
      throw logger.debug("Rendering bounce page", {
        shop: getShopFromRequest(request)
      }), renderAppBridge({ config }, request);
  }
  async function respondToExitIframeRequest(request) {
    let url = new URL(request.url);
    if (url.pathname === config.auth.exitIframePath) {
      let destination = url.searchParams.get("exitIframe");
      throw logger.debug("Rendering exit iframe page", {
        shop: getShopFromRequest(request),
        destination
      }), renderAppBridge({ config }, request, { url: destination });
    }
  }
  function createContext(request, session, authStrategy, sessionToken) {
    let context = {
      admin: createAdminApiContext(session, params, authStrategy.handleClientError(request)),
      billing: {
        require: requireBillingFactory(params, request, session),
        check: checkBillingFactory(params, request, session),
        request: requestBillingFactory(params, request, session),
        cancel: cancelBillingFactory(params, request, session),
        createUsageRecord: createUsageRecordFactory(params, request, session),
        updateUsageCappedAmount: updateUsageCappedAmountFactory(params, request, session)
      },
      session,
      cors: ensureCORSHeadersFactory(params, request)
    };
    return context = addEmbeddedFeatures(context, request, session, sessionToken), context = addScopesFeatures(context), context;
  }
  function addEmbeddedFeatures(context, request, session, sessionToken) {
    return config.isEmbeddedApp ? {
      ...context,
      sessionToken,
      redirect: redirectFactory(params, request, session.shop)
    } : context;
  }
  function addScopesFeatures(context) {
    return {
      ...context,
      scopes: scopesApiFactory(params, context.session, context.admin)
    };
  }
  return async function(request) {
    try {
      respondToBotRequest(params, request), respondToOptionsRequest(params, request), await respondToBouncePageRequest(request), await respondToExitIframeRequest(request), await strategy.respondToOAuthRequests(request), getSessionTokenHeader(request) || (validateShopAndHostParams(params, request), await ensureAppIsEmbeddedIfRequired(params, request), await ensureSessionTokenSearchParamIfRequired(params, request)), logger.info("Authenticating admin request", {
        shop: getShopFromRequest(request)
      });
      let { payload, shop, sessionId, sessionToken } = await getSessionTokenContext(params, request);
      logger.debug("Loading session from storage", { shop, sessionId });
      let existingSession = sessionId ? await config.sessionStorage.loadSession(sessionId) : void 0, session = await strategy.authenticate(request, {
        session: existingSession,
        sessionToken,
        shop
      });
      return createContext(request, session, strategy, payload);
    } catch (errorOrResponse) {
      throw errorOrResponse instanceof Response && (logger.debug("Authenticate returned a response", {
        shop: getShopFromRequest(request)
      }), ensureCORSHeadersFactory(params, request)(errorOrResponse)), errorOrResponse;
    }
  };
}
async function getSessionTokenContext(params, request) {
  let { api, config, logger } = params, headerSessionToken = getSessionTokenHeader(request), searchParamSessionToken = getSessionTokenFromUrlParam(request), sessionToken = headerSessionToken || searchParamSessionToken;
  if (logger.debug("Attempting to authenticate session token", {
    shop: getShopFromRequest(request),
    sessionToken: JSON.stringify({
      header: headerSessionToken,
      search: searchParamSessionToken
    })
  }), config.isEmbeddedApp) {
    let payload = await validateSessionToken(params, request, sessionToken), shop2 = new URL(payload.dest).hostname;
    logger.debug("Session token is valid - authenticated", { shop: shop2, payload });
    let sessionId2 = config.useOnlineTokens ? api.session.getJwtSessionId(shop2, payload.sub) : api.session.getOfflineId(shop2);
    return { shop: shop2, payload, sessionId: sessionId2, sessionToken };
  }
  let shop = new URL(request.url).searchParams.get("shop"), sessionId = await api.session.getCurrentId({
    isOnline: config.useOnlineTokens,
    rawRequest: request
  });
  return { shop, sessionId, payload: void 0, sessionToken };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/authenticate.mjs
var import_shopify_api13 = require("@shopify/shopify-api");
var import_server_runtime15 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/handle-client-error.mjs
var import_shopify_api12 = require("@shopify/shopify-api");
function handleClientErrorFactory({ request, onError }) {
  return async function({ error, params, session }) {
    throw error instanceof import_shopify_api12.HttpResponseError ? (params.logger.debug(`Got an HTTP response error from the API: ${error.message}`, {
      shop: session.shop,
      code: error.response.code,
      statusText: error.response.statusText,
      body: JSON.stringify(error.response.body)
    }), onError && await onError({ request, session, error }), new Response(JSON.stringify(error.response.body), {
      status: error.response.code,
      headers: {
        "Content-Type": error.response.headers["Content-Type"]
      }
    })) : (params.logger.debug(`Got a response error from the API: ${error.message}`, { shop: session.shop }), error);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/authenticate.mjs
var import_isbot8 = require("isbot");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/create-or-load-offline-session.mjs
async function createOrLoadOfflineSession(shop, { api, config, logger }) {
  if (config.distribution === AppDistribution.ShopifyAdmin)
    return logger.debug("Creating custom app session from configured access token", {
      shop
    }), api.session.customAppSession(shop);
  {
    logger.debug("Loading offline session from session storage", { shop });
    let offlineSessionId = api.session.getOfflineId(shop);
    return await config.sessionStorage.loadSession(offlineSessionId);
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/authenticate.mjs
function authenticateWebhookFactory(params) {
  let { api, logger } = params;
  return async function(request) {
    if (request.method !== "POST")
      throw logger.debug("Received a non-POST request for a webhook. Only POST requests are allowed.", { url: request.url, method: request.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request.text(), check = await api.webhooks.validate({
      rawBody,
      rawRequest: request
    });
    if (!check.valid)
      throw check.reason === import_shopify_api13.WebhookValidationErrorReason.InvalidHmac ? (logger.debug("Webhook HMAC validation failed", check), new Response(void 0, {
        status: 401,
        statusText: "Unauthorized"
      })) : (logger.debug("Webhook validation failed", check), new Response(void 0, { status: 400, statusText: "Bad Request" }));
    let session = await createOrLoadOfflineSession(check.domain, params), webhookContext = {
      apiVersion: check.apiVersion,
      shop: check.domain,
      topic: check.topic,
      webhookId: check.webhookId,
      payload: JSON.parse(rawBody),
      subTopic: check.subTopic || void 0,
      session: void 0,
      admin: void 0
    };
    if (!session)
      return webhookContext;
    let admin = adminClientFactory({
      params,
      session,
      handleClientError: handleClientErrorFactory({ request })
    });
    return {
      ...webhookContext,
      session,
      admin
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/override-logger.mjs
var import_semver = __toESM(require("semver"), 1), import_shopify_api14 = require("@shopify/shopify-api");
function overrideLogger(logger) {
  let baseContext = { package: "shopify-app" }, warningFunction = (message, context = {}) => logger.warning(message, { ...baseContext, ...context });
  function deprecated(warningFunction2) {
    return function(version, message) {
      if (import_semver.default.gte(SHOPIFY_REMIX_LIBRARY_VERSION, version))
        throw new import_shopify_api14.FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
      return warningFunction2(`[Deprecated | ${version}] ${message}`);
    };
  }
  return {
    ...logger,
    log: (severity, message, context = {}) => logger.log(severity, message, { ...baseContext, ...context }),
    debug: (message, context = {}) => logger.debug(message, { ...baseContext, ...context }),
    info: (message, context = {}) => logger.info(message, { ...baseContext, ...context }),
    warning: warningFunction,
    error: (message, context = {}) => logger.error(message, { ...baseContext, ...context }),
    deprecated: deprecated(warningFunction)
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/shopify-app.mjs
var import_server_runtime22 = require("@remix-run/server-runtime"), import_isbot13 = require("isbot");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/login/login.mjs
var import_server_runtime16 = require("@remix-run/server-runtime");
function loginFactory(params) {
  let { api, config, logger } = params;
  return async function(request) {
    let shopParam = new URL(request.url).searchParams.get("shop");
    if (request.method === "GET" && !shopParam)
      return {};
    let shop = shopParam || (await request.formData()).get("shop");
    if (!shop)
      return logger.debug("Missing shop parameter", { shop }), { shop: LoginErrorType.MissingShop };
    let shopWithoutProtocol = shop.replace(/^https?:\/\//, "").replace(/\/$/, ""), shopWithDomain = shop?.indexOf(".") === -1 ? `${shopWithoutProtocol}.myshopify.com` : shopWithoutProtocol, sanitizedShop = api.utils.sanitizeShop(shopWithDomain);
    if (!sanitizedShop)
      return logger.debug("Invalid shop parameter", { shop }), { shop: LoginErrorType.InvalidShop };
    let authPath = `${config.appUrl}${config.auth.path}?shop=${sanitizedShop}`, installPath = `https://${api.utils.legacyUrlToShopAdminUrl(sanitizedShop)}/oauth/install?client_id=${config.apiKey}`, redirectUrl = config.isEmbeddedApp && config.future.unstable_newEmbeddedAuthStrategy ? installPath : authPath;
    throw logger.info(`Redirecting login request to ${redirectUrl}`, {
      shop: sanitizedShop
    }), (0, import_server_runtime16.redirect)(redirectUrl);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/errors.mjs
var import_shopify_api15 = require("@shopify/shopify-api"), SessionNotFoundError = class extends import_shopify_api15.ShopifyError {
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/unauthenticated/admin/factory.mjs
function unauthenticatedAdminContextFactory(params) {
  return async (shop) => {
    let session = await createOrLoadOfflineSession(shop, params);
    if (!session)
      throw new SessionNotFoundError(`Could not find a session for shop ${shop} when creating unauthenticated admin context`);
    return {
      session,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/extension/authenticate.mjs
var import_server_runtime17 = require("@remix-run/server-runtime");
function authenticateExtensionFactory(params, requestType) {
  return async function(request, options = {}) {
    let { logger } = params, corsHeaders = options.corsHeaders ?? [];
    respondToBotRequest(params, request), respondToOptionsRequest(params, request, corsHeaders);
    let sessionTokenHeader = getSessionTokenHeader(request);
    if (logger.info(`Authenticating ${requestType} request`, {
      shop: getShopFromRequest(request)
    }), !sessionTokenHeader)
      throw logger.debug("Request did not contain a session token", {
        shop: getShopFromRequest(request)
      }), new Response(void 0, {
        status: 401,
        statusText: "Unauthorized"
      });
    return {
      sessionToken: await validateSessionToken(params, request, sessionTokenHeader, { checkAudience: !1, retryRequest: !1 }),
      cors: ensureCORSHeadersFactory(params, request, corsHeaders)
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/checkout/authenticate.mjs
function authenticateCheckoutFactory(params) {
  return authenticateExtensionFactory(params, "checkout");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/storefront/factory.mjs
function storefrontClientFactory({ params, session }) {
  let { api } = params;
  return {
    graphql: async (query, options = {}) => {
      let apiResponse = await new api.clients.Storefront({
        session,
        apiVersion: options.apiVersion
      }).request(query, {
        variables: options?.variables,
        retries: options?.tries ? options.tries - 1 : 0,
        headers: options?.headers
      });
      return new Response(JSON.stringify(apiResponse));
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/appProxy/authenticate.mjs
function authenticateAppProxyFactory(params) {
  let { api, config, logger } = params;
  return async function(request) {
    let url = new URL(request.url), shop = url.searchParams.get("shop");
    if (logger.info("Authenticating app proxy request", { shop }), !await validateAppProxyHmac(params, url))
      throw logger.info("App proxy request has invalid signature", { shop }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let sessionId = api.session.getOfflineId(shop), session = await config.sessionStorage.loadSession(sessionId);
    return session ? {
      liquid,
      session,
      admin: adminClientFactory({ params, session }),
      storefront: storefrontClientFactory({ params, session })
    } : (logger.debug("Could not find offline session, returning empty context", {
      shop,
      ...Object.fromEntries(url.searchParams.entries())
    }), {
      liquid,
      session: void 0,
      admin: void 0,
      storefront: void 0
    });
  };
}
var liquid = (body, initAndOptions) => {
  let processedBody = processLiquidBody(body);
  if (typeof initAndOptions != "object")
    return new Response(processedBody, {
      status: initAndOptions || 200,
      headers: {
        "Content-Type": "application/liquid"
      }
    });
  let { layout, ...responseInit } = initAndOptions || {}, responseBody = layout === !1 ? `{% layout none %} ${processedBody}` : processedBody, headers = new Headers(responseInit.headers);
  return headers.set("Content-Type", "application/liquid"), new Response(responseBody, {
    ...responseInit,
    headers
  });
};
async function validateAppProxyHmac(params, url) {
  let { api, logger } = params;
  try {
    let searchParams = new URLSearchParams(url.search);
    searchParams.get("index") || searchParams.delete("index");
    let isValid = await api.utils.validateHmac(Object.fromEntries(searchParams.entries()), { signator: "appProxy" });
    if (!isValid) {
      let data = `routes%2F${url.pathname.replace(/^\//, "").replace(/\/$/, "").replaceAll("/", ".")}`;
      if (searchParams = new URLSearchParams(`?_data=${data}&${searchParams.toString().replace(/^\?/, "")}`), isValid = await api.utils.validateHmac(Object.fromEntries(searchParams.entries()), { signator: "appProxy" }), !isValid) {
        let searchParams2 = new URLSearchParams(`?_data=${data}._index&${url.search.replace(/^\?/, "")}`);
        isValid = await api.utils.validateHmac(Object.fromEntries(searchParams2.entries()), { signator: "appProxy" });
      }
    }
    return isValid;
  } catch (error) {
    let shop = url.searchParams.get("shop");
    throw logger.info(error.message, { shop }), new Response(void 0, { status: 400, statusText: "Bad Request" });
  }
}
function processLiquidBody(body) {
  return body.replaceAll(/<(form[^>]+)action="(\/[^"?]+)(\?[^"]+)?">/g, '<$1action="$2/$3">').replaceAll(/<(a[^>]+)href="(\/[^"?]+)(\?[^"]+)?">/g, '<$1href="$2/$3">');
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/customer-account/authenticate.mjs
function authenticateCustomerAccountFactory(params) {
  return authenticateExtensionFactory(params, "customer account");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/pos/authenticate.mjs
function authenticatePOSFactory(params) {
  return authenticateExtensionFactory(params, "pos");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/factory.mjs
function authenticatePublicFactory(params) {
  let authenticateCheckout = authenticateCheckoutFactory(params), authenticateAppProxy = authenticateAppProxyFactory(params), authenticateCustomerAccount = authenticateCustomerAccountFactory(params), authenticatePOS = authenticatePOSFactory(params);
  return {
    checkout: authenticateCheckout,
    appProxy: authenticateAppProxy,
    customerAccount: authenticateCustomerAccount,
    pos: authenticatePOS
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/unauthenticated/storefront/factory.mjs
function unauthenticatedStorefrontContextFactory(params) {
  return async (shop) => {
    let session = await createOrLoadOfflineSession(shop, params);
    if (!session)
      throw new SessionNotFoundError(`Could not find a session for shop ${shop} when creating unauthenticated storefront context`);
    return {
      session,
      storefront: storefrontClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/auth-code-flow.mjs
var import_shopify_api16 = require("@shopify/shopify-api");
var import_server_runtime18 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/trigger-after-auth-hook.mjs
async function triggerAfterAuthHook(params, session, request, authStrategy) {
  let { config, logger } = params;
  if (config.hooks.afterAuth) {
    logger.info("Running afterAuth hook", { shop: session.shop });
    let admin = createAdminApiContext(session, params, authStrategy.handleClientError(request));
    await config.hooks.afterAuth({
      session,
      admin
    });
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/auth-code-flow.mjs
var import_isbot9 = require("isbot");
var AuthCodeFlowStrategy = class {
  api;
  config;
  logger;
  constructor({ api, config, logger }) {
    this.api = api, this.config = config, this.logger = logger;
  }
  async respondToOAuthRequests(request) {
    let { api, config } = this, url = new URL(request.url), isAuthRequest = url.pathname === config.auth.path, isAuthCallbackRequest = url.pathname === config.auth.callbackPath;
    if (isAuthRequest || isAuthCallbackRequest) {
      let shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
      throw shop ? isAuthRequest ? await this.handleAuthBeginRequest(request, shop) : await this.handleAuthCallbackRequest(request, shop) : new Response("Shop param is invalid", { status: 400 });
    }
    getSessionTokenHeader(request) || await this.ensureInstalledOnShop(request);
  }
  async authenticate(request, sessionContext) {
    let { api, config, logger } = this, { shop, session } = sessionContext;
    return session ? session.isActive(config.scopes) || (logger.debug("Found a session, but it has expired, redirecting to OAuth", { shop }), await redirectToAuthPage({ config, api }, request, shop)) : (logger.debug("No session found, redirecting to OAuth", { shop }), await redirectToAuthPage({ config, api }, request, shop)), logger.debug("Found a valid session", { shop }), session;
  }
  handleClientError(request) {
    let { api, config, logger } = this;
    return handleClientErrorFactory({
      request,
      onError: async ({ session, error }) => {
        if (error.response.code === 401)
          throw await redirectToAuthPage({ api, config }, request, session.shop);
      }
    });
  }
  async ensureInstalledOnShop(request) {
    let { api, config, logger } = this;
    validateShopAndHostParams({ api, config, logger }, request);
    let url = new URL(request.url), shop = url.searchParams.get("shop");
    if (logger.debug("Ensuring app is installed on shop", { shop }), !await this.hasValidOfflineId(request))
      throw logger.info("Could not find a shop, can't authenticate request"), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let offlineSession = await this.getOfflineSession(request), isEmbedded = url.searchParams.get("embedded") === "1";
    if (!offlineSession)
      if (logger.info("Shop hasn't installed app yet, redirecting to OAuth", {
        shop
      }), isEmbedded)
        redirectWithExitIframe({ api, config }, request, shop);
      else
        throw await beginAuth({ api, config }, request, !1, shop);
    if (shop = shop || offlineSession.shop, config.isEmbeddedApp && !isEmbedded)
      try {
        logger.debug("Ensuring offline session is valid before embedding", {
          shop
        }), await this.testSession(offlineSession), logger.debug("Offline session is still valid, embedding app", { shop });
      } catch (error) {
        await this.handleInvalidOfflineSession(error, request, shop);
      }
  }
  async handleAuthBeginRequest(request, shop) {
    let { api, config, logger } = this;
    throw logger.info("Handling OAuth begin request", { shop }), config.isEmbeddedApp && request.headers.get("Sec-Fetch-Dest") === "iframe" ? (logger.debug("Auth request in iframe detected, exiting iframe", { shop }), redirectWithExitIframe({ api, config }, request, shop)) : await beginAuth({ api, config }, request, !1, shop);
  }
  async handleAuthCallbackRequest(request, shop) {
    let { api, config, logger } = this;
    logger.info("Handling OAuth callback request", { shop });
    try {
      let { session, headers: responseHeaders } = await api.auth.callback({
        rawRequest: request
      });
      throw await config.sessionStorage.storeSession(session), config.useOnlineTokens && !session.isOnline && (logger.info("Requesting online access token for offline session", {
        shop
      }), await beginAuth({ api, config, logger }, request, !0, shop)), logger.debug("Request is valid, loaded session from OAuth callback", {
        shop: session.shop,
        isOnline: session.isOnline
      }), await triggerAfterAuthHook({ api, config, logger }, session, request, this), await redirectToShopifyOrAppRoot(request, { api, config, logger }, responseHeaders);
    } catch (error) {
      throw error instanceof Response ? error : await this.oauthCallbackError(error, request, shop);
    }
  }
  async getOfflineSession(request) {
    let offlineId = await this.getOfflineSessionId(request);
    return this.config.sessionStorage.loadSession(offlineId);
  }
  async hasValidOfflineId(request) {
    return Boolean(await this.getOfflineSessionId(request));
  }
  async getOfflineSessionId(request) {
    let { api } = this, shop = new URL(request.url).searchParams.get("shop");
    return shop ? api.session.getOfflineId(shop) : api.session.getCurrentId({ isOnline: !1, rawRequest: request });
  }
  async testSession(session) {
    let { api } = this;
    await new api.clients.Graphql({
      session
    }).request(`#graphql
      query shopifyAppShopName {
        shop {
          name
        }
      }
    `);
  }
  async oauthCallbackError(error, request, shop) {
    let { logger } = this;
    return logger.error("Error during OAuth callback", { shop, error: error.message }), error instanceof import_shopify_api16.CookieNotFound ? this.handleAuthBeginRequest(request, shop) : error instanceof import_shopify_api16.InvalidHmacError || error instanceof import_shopify_api16.InvalidOAuthError ? new Response(void 0, {
      status: 400,
      statusText: "Invalid OAuth Request"
    }) : new Response(void 0, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
  async handleInvalidOfflineSession(error, request, shop) {
    let { api, logger, config } = this;
    if (error instanceof import_shopify_api16.HttpResponseError) {
      if (error.response.code === 401)
        throw logger.info("Shop session is no longer valid, redirecting to OAuth", {
          shop
        }), await beginAuth({ api, config }, request, !1, shop);
      {
        let message = JSON.stringify(error.response.body, null, 2);
        throw logger.error(`Unexpected error during session validation: ${message}`, {
          shop
        }), new Response(void 0, {
          status: error.response.code,
          statusText: error.response.statusText
        });
      }
    } else if (error instanceof import_shopify_api16.GraphqlQueryError) {
      let context = { shop };
      throw error.response && (context.response = JSON.stringify(error.body)), logger.error(`Unexpected error during session validation: ${error.message}`, context), new Response(void 0, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/token-exchange.mjs
var import_shopify_api17 = require("@shopify/shopify-api");
var import_isbot10 = require("isbot");
var import_server_runtime19 = require("@remix-run/server-runtime");
var TokenExchangeStrategy = class {
  api;
  config;
  logger;
  constructor({ api, config, logger }) {
    this.api = api, this.config = config, this.logger = logger;
  }
  async respondToOAuthRequests(_request) {
  }
  async authenticate(request, sessionContext) {
    let { api, config, logger } = this, { shop, session, sessionToken } = sessionContext;
    if (!sessionToken)
      throw new import_shopify_api17.InvalidJwtError();
    if (!session || !session.isActive(void 0)) {
      logger.info("No valid session found", { shop }), logger.info("Requesting offline access token", { shop });
      let { session: offlineSession } = await this.exchangeToken({
        request,
        sessionToken,
        shop,
        requestedTokenType: import_shopify_api17.RequestedTokenType.OfflineAccessToken
      });
      await config.sessionStorage.storeSession(offlineSession);
      let newSession = offlineSession;
      if (config.useOnlineTokens) {
        logger.info("Requesting online access token", { shop });
        let { session: onlineSession } = await this.exchangeToken({
          request,
          sessionToken,
          shop,
          requestedTokenType: import_shopify_api17.RequestedTokenType.OnlineAccessToken
        });
        await config.sessionStorage.storeSession(onlineSession), newSession = onlineSession;
      }
      logger.debug("Request is valid, loaded session from session token", {
        shop: newSession.shop,
        isOnline: newSession.isOnline
      });
      try {
        await this.handleAfterAuthHook({ api, config, logger }, newSession, request, sessionToken);
      } catch (errorOrResponse) {
        throw errorOrResponse instanceof Response ? errorOrResponse : new Response(void 0, {
          status: 500,
          statusText: "Internal Server Error"
        });
      }
      return newSession;
    }
    return session;
  }
  handleClientError(request) {
    let { api, config, logger } = this;
    return handleClientErrorFactory({
      request,
      onError: async ({ session, error }) => {
        error.response.code === 401 && (logger.debug("Responding to invalid access token", {
          shop: getShopFromRequest(request)
        }), await invalidateAccessToken({ config, logger }, session), respondToInvalidSessionToken({
          params: { config, api, logger },
          request
        }));
      }
    });
  }
  async exchangeToken({ request, shop, sessionToken, requestedTokenType }) {
    let { api, config, logger } = this;
    try {
      return await api.auth.tokenExchange({
        sessionToken,
        shop,
        requestedTokenType
      });
    } catch (error) {
      throw error instanceof import_shopify_api17.InvalidJwtError || error instanceof import_shopify_api17.HttpResponseError && error.response.code === 400 && error.response.body?.error === "invalid_subject_token" ? respondToInvalidSessionToken({
        params: { api, config, logger },
        request,
        retryRequest: !0
      }) : new Response(void 0, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
  async handleAfterAuthHook(params, session, request, sessionToken) {
    let { config } = params;
    await config.idempotentPromiseHandler.handlePromise({
      promiseFunction: () => triggerAfterAuthHook(params, session, request, this),
      identifier: sessionToken
    });
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/merchant-custom-app.mjs
var import_shopify_api18 = require("@shopify/shopify-api"), import_server_runtime20 = require("@remix-run/server-runtime");
var import_isbot11 = require("isbot");
var MerchantCustomAuth = class {
  api;
  config;
  logger;
  constructor({ api, config, logger }) {
    this.api = api, this.config = config, this.logger = logger;
  }
  async respondToOAuthRequests(request) {
    this.logger.debug("Skipping OAuth request for merchant custom app", {
      shop: getShopFromRequest(request)
    });
  }
  async authenticate(_request, sessionContext) {
    let { shop } = sessionContext;
    return this.logger.debug("Building session from configured access token for merchant custom app", { shop }), this.api.session.customAppSession(shop);
  }
  handleClientError(request) {
    return handleClientErrorFactory({
      request,
      onError: async ({ error }) => {
        if (error.response.code === 401)
          throw this.logger.info("Request failed with 401. Review your API credentials or generate new tokens. https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/generate-app-access-tokens-admin#rotating-api-credentials-for-admin-created-apps "), new import_shopify_api18.ShopifyError("Unauthorized: Access token has been revoked.");
      }
    });
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/idempotent-promise-handler.mjs
var IdempotentPromiseHandler = class {
  identifiers;
  constructor() {
    this.identifiers = /* @__PURE__ */ new Map();
  }
  async handlePromise({ promiseFunction, identifier }) {
    try {
      this.isPromiseRunnable(identifier) && await promiseFunction();
    } finally {
      this.clearStaleIdentifiers();
    }
    return Promise.resolve();
  }
  isPromiseRunnable(identifier) {
    return this.identifiers.has(identifier) ? !1 : (this.identifiers.set(identifier, Date.now()), !0);
  }
  async clearStaleIdentifiers() {
    this.identifiers.forEach((date, identifier, map) => {
      Date.now() - date > 6e4 && map.delete(identifier);
    });
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/flow/authenticate.mjs
function authenticateFlowFactory(params) {
  let { api, config, logger } = params;
  return async function(request) {
    if (logger.info("Authenticating flow request"), request.method !== "POST")
      throw logger.debug("Received a non-POST request for flow. Only POST requests are allowed.", { url: request.url, method: request.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request.text(), result = await api.flow.validate({
      rawBody,
      rawRequest: request
    });
    if (!result.valid)
      throw logger.error("Received an invalid flow request", { reason: result.reason }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let payload = JSON.parse(rawBody);
    logger.debug("Flow request is valid, looking for an offline session", {
      shop: payload.shopify_domain
    });
    let sessionId = api.session.getOfflineId(payload.shopify_domain), session = await config.sessionStorage.loadSession(sessionId);
    if (!session)
      throw logger.info("Flow request could not find session", {
        shop: payload.shopify_domain
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    return logger.debug("Found a session for the flow request", { shop: session.shop }), {
      session,
      payload,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/fulfillment-service/authenticate.mjs
var import_shopify_api19 = require("@shopify/shopify-api");
var import_server_runtime21 = require("@remix-run/server-runtime"), import_isbot12 = require("isbot");
function authenticateFulfillmentServiceFactory(params) {
  let { api, logger } = params;
  return async function(request) {
    if (logger.info("Authenticating fulfillment service request"), request.method !== "POST")
      throw logger.debug("Received a non-POST request for fulfillment service. Only POST requests are allowed.", { url: request.url, method: request.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request.text(), result = await api.fulfillmentService.validate({
      rawBody,
      rawRequest: request
    });
    if (!result.valid)
      throw logger.error("Received an invalid fulfillment service request", {
        reason: result.reason
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let payload = JSON.parse(rawBody), shop = request.headers.get(import_shopify_api19.ShopifyHeader.Domain) || "";
    logger.debug("Fulfillment service request is valid, looking for an offline session", {
      shop
    });
    let session = await createOrLoadOfflineSession(shop, params);
    if (!session)
      throw logger.info("Fulfillment service request could not find session", {
        shop
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    return logger.debug("Found a session for the fulfillment service request", {
      shop
    }), {
      session,
      payload,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/future/flags.mjs
function logDisabledFutureFlags(config, logger) {
  let logFlag = (flag, message) => logger.info(`Future flag ${flag} is disabled.

  ${message}
`);
  config.future.unstable_newEmbeddedAuthStrategy || logFlag("unstable_newEmbeddedAuthStrategy", `Enable this to use OAuth token exchange instead of auth code to generate API access tokens.
  Your app must be using Shopify managed install: https://shopify.dev/docs/apps/auth/installation`);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/shopify-app.mjs
function shopifyApp(appConfig) {
  let api = deriveApi(appConfig), config = deriveConfig(appConfig, api.config), logger = overrideLogger(api.logger);
  appConfig.webhooks && api.webhooks.addHandlers(appConfig.webhooks);
  let params = { api, config, logger }, strategy;
  config.distribution === AppDistribution.ShopifyAdmin ? strategy = new MerchantCustomAuth(params) : config.future.unstable_newEmbeddedAuthStrategy && config.isEmbeddedApp ? strategy = new TokenExchangeStrategy(params) : strategy = new AuthCodeFlowStrategy(params);
  let authStrategy = authStrategyFactory({
    ...params,
    strategy
  }), shopify2 = {
    sessionStorage: config.sessionStorage,
    addDocumentResponseHeaders: addDocumentResponseHeadersFactory(params),
    registerWebhooks: registerWebhooksFactory(params),
    authenticate: {
      admin: authStrategy,
      flow: authenticateFlowFactory(params),
      public: authenticatePublicFactory(params),
      fulfillmentService: authenticateFulfillmentServiceFactory(params),
      webhook: authenticateWebhookFactory(params)
    },
    unauthenticated: {
      admin: unauthenticatedAdminContextFactory(params),
      storefront: unauthenticatedStorefrontContextFactory(params)
    }
  };
  return (isAppStoreApp(shopify2, appConfig) || isSingleMerchantApp(shopify2, appConfig)) && (shopify2.login = loginFactory(params)), logDisabledFutureFlags(config, logger), shopify2;
}
function isAppStoreApp(_shopify, config) {
  return config.distribution === AppDistribution.AppStore;
}
function isSingleMerchantApp(_shopify, config) {
  return config.distribution === AppDistribution.SingleMerchant;
}
function deriveApi(appConfig) {
  let appUrl;
  try {
    appUrl = new URL(appConfig.appUrl);
  } catch {
    let message = appConfig.appUrl === "" ? `Detected an empty appUrl configuration, please make sure to set the necessary environment variables.
If you're deploying your app, you can find more information at https://shopify.dev/docs/apps/launch/deployment/deploy-web-app/deploy-to-hosting-service#step-4-set-up-environment-variables` : `Invalid appUrl configuration '${appConfig.appUrl}', please provide a valid URL.`;
    throw new import_shopify_api20.ShopifyError(message);
  }
  appUrl.hostname === "localhost" && !appUrl.port && process.env.PORT && (appUrl.port = process.env.PORT), appConfig.appUrl = appUrl.origin;
  let userAgentPrefix = `Shopify Remix Library v${SHOPIFY_REMIX_LIBRARY_VERSION}`;
  return appConfig.userAgentPrefix && (userAgentPrefix = `${appConfig.userAgentPrefix} | ${userAgentPrefix}`), (0, import_shopify_api20.shopifyApi)({
    ...appConfig,
    hostName: appUrl.host,
    hostScheme: appUrl.protocol.replace(":", ""),
    userAgentPrefix,
    isEmbeddedApp: appConfig.isEmbeddedApp ?? !0,
    apiVersion: appConfig.apiVersion ?? import_shopify_api20.LATEST_API_VERSION,
    isCustomStoreApp: appConfig.distribution === AppDistribution.ShopifyAdmin,
    billing: appConfig.billing,
    future: {
      lineItemBilling: !0,
      unstable_managedPricingSupport: !0
    },
    _logDisabledFutureFlags: !1
  });
}
function deriveConfig(appConfig, apiConfig) {
  if (!appConfig.sessionStorage && appConfig.distribution !== AppDistribution.ShopifyAdmin)
    throw new import_shopify_api20.ShopifyError("Please provide a valid session storage. Refer to https://github.com/Shopify/shopify-app-js/blob/main/README.md#session-storage-options for options.");
  let authPathPrefix = appConfig.authPathPrefix || "/auth";
  return appConfig.distribution = appConfig.distribution ?? AppDistribution.AppStore, {
    ...appConfig,
    ...apiConfig,
    billing: appConfig.billing,
    scopes: apiConfig.scopes,
    idempotentPromiseHandler: new IdempotentPromiseHandler(),
    canUseLoginForm: appConfig.distribution !== AppDistribution.ShopifyAdmin,
    useOnlineTokens: appConfig.useOnlineTokens ?? !1,
    hooks: appConfig.hooks ?? {},
    sessionStorage: appConfig.sessionStorage,
    future: appConfig.future ?? {},
    auth: {
      path: authPathPrefix,
      callbackPath: `${authPathPrefix}/callback`,
      patchSessionTokenPath: `${authPathPrefix}/session-token`,
      exitIframePath: `${authPathPrefix}/exit-iframe`,
      loginPath: `${authPathPrefix}/login`
    },
    distribution: appConfig.distribution
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/index.mjs
(0, import_runtime.setAbstractRuntimeString)(() => "Remix");

// app/shopify.server.ts
var import_shopify_app_session_storage_sqlite = require("@shopify/shopify-app-session-storage-sqlite"), sessionStorage = new import_shopify_app_session_storage_sqlite.SQLiteSessionStorage("./database.sqlite"), shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_SCOPES?.split(",") || [],
  appUrl: process.env.SHOPIFY_APP_URL,
  sessionStorage
}), { authenticate } = shopify;

// app/routes/api.auth.callback.tsx
async function loader2({ request }) {
  return shopify.authenticate.admin(request);
}

// app/routes/api.auth.tsx
var api_auth_exports = {};
__export(api_auth_exports, {
  loader: () => loader3
});
async function loader3({ request }) {
  return shopify.authenticate.admin(request);
}

// app/routes/api.test.tsx
var api_test_exports = {};
__export(api_test_exports, {
  loader: () => loader4
});
var import_node2 = require("@remix-run/node");
var loader4 = async ({ request }) => {
  let { session } = await authenticate.admin(request);
  return (0, import_node2.json)({ shop: session.shop, accessToken: session.accessToken });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react3 = require("react"), import_app_bridge = require("@shopify/app-bridge");

// app/utils/authenticatedFetch.js
var import_app_bridge_utils = require("@shopify/app-bridge-utils");
function authenticatedFetch(app) {
  return async (uri, options = {}) => {
    let token = await (0, import_app_bridge_utils.getSessionToken)(app);
    return options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }, fetch(uri, options);
  };
}

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  let [shop, setShop] = (0, import_react3.useState)(null);
  return (0, import_react3.useEffect)(() => {
    let host = window.__SHOPIFY_HOST__ || new URLSearchParams(window.location.search).get("host") || "", apiKey = window.__SHOPIFY_API_KEY__ || "";
    if (!host) {
      console.error("\u274C host \u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093");
      return;
    }
    let app = (0, import_app_bridge.createApp)({
      apiKey,
      host,
      forceRedirect: !0
    });
    authenticatedFetch(app)("/api/test").then((res) => res.json()).then((data) => {
      console.log("API response:", data), setShop(data.shop || null);
    }).catch((err) => console.error("API error:", err));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Brand Logo List App" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "This app can be operated from the customization screen of the online store. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 16
      }, this),
      "You can add it by selecting ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Add Section \u2192 Apps \u2192 Brand Logo List App" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 37
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    shop && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { style: { marginTop: "1rem", color: "green" }, children: [
      "\u2705 Connected to shop: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: shop }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 32
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-V2D2CCY2.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-DPWS7JE7.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-3QAGCJ4N.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VGPSIOZN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-N3HE2RD7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth": { id: "routes/api.auth", parentId: "root", path: "api/auth", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth-ZQPR3C3J.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.callback": { id: "routes/api.auth.callback", parentId: "routes/api.auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.callback-CIM7Y5RR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.test": { id: "routes/api.test", parentId: "root", path: "api/test", index: void 0, caseSensitive: void 0, module: "/build/routes/api.test-DCBEUBSL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5196c24e", hmr: { runtime: "/build/_shared\\chunk-3QAGCJ4N.js", timestamp: 1755621008793 }, url: "/build/manifest-5196C24E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
