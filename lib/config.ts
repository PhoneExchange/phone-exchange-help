import Medusa from "@medusajs/js-sdk";

let MEDUSA_BACKEND_URL = "http://localhost:9000";

if (process.env.BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.BACKEND_URL;
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  // debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.PUBLISHABLE_KEY,
  auth: {
    type: "jwt",
  },
});
