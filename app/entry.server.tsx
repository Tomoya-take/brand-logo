// app/entry.server.tsx
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import shopify from "./shopify.server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: any
) {
  // ✅ 管理画面 iframe 対応のヘッダを自動付与（超重要）
  shopify.addDocumentResponseHeaders(request, responseHeaders);

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}


