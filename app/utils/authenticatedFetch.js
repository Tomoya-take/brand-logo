import { getSessionToken } from "@shopify/app-bridge-utils";
export function authenticatedFetch(app) {
    return async (uri, options = {}) => {
        const token = await getSessionToken(app);
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        return fetch(uri, options);
    };
}
