// app/routes/auth.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";  // ← default ではなく named import

export async function loader({ request }: LoaderFunctionArgs) {
  return authenticate.admin(request);
}


