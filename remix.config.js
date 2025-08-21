/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    /^@shopify\/shopify-app-remix/,
    /^@shopify\/polaris/,
    /^@shopify\/polaris-icons/,
  ],
};
