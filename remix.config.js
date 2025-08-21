/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs", // or esm に統一
  serverDependenciesToBundle: [
    /^@shopify\/shopify-app-remix/,
    /^@shopify\/polaris/,
    /^@shopify\/polaris-icons/,
  ],
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
};
