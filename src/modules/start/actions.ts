import { bot } from "../../bot";
import { addAction, addTextRule, InMemoryUser } from "@ebenos/framework";
import start from ".";
import persistentKeyboard from "../../elements/persistentMenu";
import {
  Carousel,
  Message,
  ICarouselStyle,
  IFrame,
  Button,
  RichMedia,
} from "@ebenos/viber-elements";
import colors from "../../elements/colors";

const sender = {
  name: "ΚΩΤΣΟΒΟΛΟΣ",
};

addAction(start, text);
addTextRule(start, text, /TEXT/);
async function text(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        text: "Hello, this is just a text msg",
        sender,
        keyboard: persistentKeyboard(),
      })
    )
    .end();
}

addAction(start, carouselFn);
addTextRule(start, carouselFn, /CAROUSEL/);
async function carouselFn(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        rich_media: new Carousel(
          [
            {
              title: "Title 1",
              subtitle: "Subtitle 1",
              image: "https://enneas.gr/wp-content/uploads/2020/05/SEO-1.svg",
              buttons: [
                {
                  text: "Btn 1",
                  url: "https://www.enneas.gr",
                },
              ],
            },
            {
              title: "Title 2",
              subtitle: "Subtitle 2",
              image: "https://enneas.gr/wp-content/uploads/2020/05/SEO-1.svg",
              buttons: [
                {
                  text: "Btn 2",
                  url: "https://www.enneas.gr",
                },
              ],
            },
          ],
          {
            style: carouselStyle,
            frame: buttonFrame,
          }
        ),
        sender,
        keyboard: persistentKeyboard(),
      })
    )
    .end();
}
addAction(start, richMediaFn);
addTextRule(start, richMediaFn, /RICHMEDIA/);
async function richMediaFn(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        sender,
        keyboard: persistentKeyboard(),
        media: "https://media.giphy.com/media/2wSblJnaFakthn0BM1/giphy.gif",
      })
    )
    .end();
}

addAction(start, questionFn);
addTextRule(start, questionFn, /QUESTION/);
async function questionFn(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        text: "This is a question...",
        sender,
        keyboard: persistentKeyboard([
          [
            {
              element_type: "button",
              title: "Yes 👍🏽",
              payload: "start",
              columns: 3,
            },
            {
              element_type: "button",
              title: "No 👾",
              payload: "start",
              columns: 3,
            },
          ],
        ]),
      })
    )
    .end();
}

addAction(start, buttonFn);
addTextRule(start, buttonFn, /BUTTON/);
async function buttonFn(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        sender,
        keyboard: persistentKeyboard(),
        rich_media: new RichMedia({
          ButtonsGroupColumns: 4,
          ButtonsGroupRows: 1,
          Buttons: [
            new Button({
              Rows: 1,
              Columns: 4,
              Text: "press me",
              ActionType: "open-url",
              ActionBody: "https://enneas.gr/",
            }),
          ],
        }),
      })
    )
    .end();
}

addAction(start, textButtonFn);
addTextRule(start, textButtonFn, /TEXTBUTTON/);
async function textButtonFn(user: InMemoryUser) {
  await bot
    .scenario(user)
    .send(
      new Message({
        sender,
        keyboard: persistentKeyboard(),
        media: "https://media.giphy.com/media/2wSblJnaFakthn0BM1/giphy.gif",
      })
    )
    .end();
}

const carouselStyle: ICarouselStyle = {
  title: {
    textColor: colors.white,
    backgroundColor: colors.lessDarkBlue,
  },
  button: {
    textColor: colors.white,
    backgroundColor: colors.redMain,
  },
  subtitle: {
    backgroundColor: colors.lessDarkBlue,
    textColor: colors.white,
  },
  backgroundColor: colors.lessDarkBlue,
  imageBackgroundColor: colors.white,
};

const buttonFrame: IFrame = {
  BorderWidth: 5,
  BorderColor: colors.lessDarkBlue,
  CornerRadius: 10,
};
