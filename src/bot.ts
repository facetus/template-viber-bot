import { Bot, InMemoryUser } from "@ebenos/framework";
import { ViberAdapter } from "@ebenos/viber-adapter";
import { Message } from "@ebenos/viber-elements";

import { viberConfig } from "./secret";
import persistentKeyboard from "./elements/persistentMenu";

import start from "./modules/start";

const welcomeMessage = new Message({
  text: `Welcome to this bot.`,
  keyboard: persistentKeyboard(),
  sender: {
    name: "BotName",
  },
});

export const adapter = new ViberAdapter({
  authToken: viberConfig.auth_token,
  welcomeMessage: welcomeMessage.serialize() as Record<string, any>,
});

export const bot = new Bot<InMemoryUser>(adapter, {});

bot.addModule(start);
