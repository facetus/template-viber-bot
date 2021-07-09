import { connect } from "mongoose";
import { adapter } from "./bot";
import { viberConfig } from "./secret";

adapter.webhook.listen(viberConfig.port);
console.log("Listening...");

console.log("Setting up webhook...");

(async () => {
  await connect(`${viberConfig.mongodb_uri}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Database connected!");
  await adapter.setWebhook(viberConfig.webhook_domain);
  console.log("Ready!");
})();
