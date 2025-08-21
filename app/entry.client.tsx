// app/entry.client.tsx
import "@shopify/polaris/build/styles.css";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document, <RemixBrowser />);
