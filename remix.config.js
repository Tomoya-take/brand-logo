/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    /^@shopify\/shopify-app-remix/,
    /^@shopify\/app-bridge/,
    /^@shopify\/app-bridge-react/,
    /^@shopify\/app-bridge-utils/,
    /^@shopify\/polaris/,
    /^@shopify\/polaris-icons/,
  ],
  future: {
    v2_cssSideEffectImports: true, // ← これを有効にする
  },
  // 👇 Polaris の CSS を side-effect import として扱う
  watchPaths: ["./node_modules/@shopify/polaris/build/styles.css"],
};

