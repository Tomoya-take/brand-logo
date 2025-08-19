import { getSessionToken } from "@shopify/app-bridge-utils";

export function authenticatedFetch(app: any) {
  return async (uri: string, options: RequestInit = {}) => {
    const token = await getSessionToken(app);
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    return fetch(uri, options);
  };
}
