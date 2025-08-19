// global.d.ts
export {};

declare global {
  interface Window {
    __SHOPIFY_API_KEY__?: string;
  }
}
