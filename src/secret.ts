import dotenv from "dotenv";
dotenv.config();

const VIBER_AUTH_TOKEN = process.env.VIBER_AUTH_TOKEN;
if (!VIBER_AUTH_TOKEN) {
  throw new Error("Missing env: No VIBER_AUTH_TOKEN");
}

const WEBHOOK_DOMAIN = process.env.WEBHOOK_DOMAIN;
if (!WEBHOOK_DOMAIN) {
  throw new Error("Missing env: No WEBHOOK_DOMAIN");
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Missing env: No MONGODB_URI");
}

const PORT = process.env.PORT || 3001;
if (!PORT) {
  throw new Error("Missing env: No PORT");
}

export const viberConfig = {
  auth_token: VIBER_AUTH_TOKEN,
  webhook_domain: WEBHOOK_DOMAIN,
  port: PORT,
  mongodb_uri: MONGODB_URI,
};
