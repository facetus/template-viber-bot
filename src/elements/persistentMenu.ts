import { Button, Keyboard } from "@ebenos/viber-elements";
import { flatten } from "lodash";
import colors from "./colors";

const banner = new Button({
  Rows: 1,
  Columns: 6,
  BgMedia:
    "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/2a3f40db90608285fb9eac9c7402b30f/template_(1).png",
  ActionBody: "",
  Text: "",
  TextOpacity: 0,
});

const staticButtons = [
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/6718d1afbceb318490f132226c73c0e0/6.png",
    ActionBody: "TEXT",
    Silent: true,
    Text: "text",
    TextOpacity: 0,
  }),
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/abc98ae19d246412c5333438dfd09926/5.png",
    ActionBody: "CAROUSEL",
    Silent: true,
    Text: "carousel",
    TextOpacity: 0,
  }),
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/f9ecc82411cfc7c23ed43724587534ce/4.png",
    ActionBody: "RICHMEDIA",
    Silent: true,
    Text: "Rich Media",
    TextOpacity: 0,
  }),
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/265a11ab00d3a5b819741e67e990ef40/3.png",
    ActionBody: "QUESTION",
    Silent: true,
    Text: "question",
    TextOpacity: 0,
  }),
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/bb9b87c08698a874aca42f2f1257b6fb/2.png",
    ActionBody: "BUTTON",
    Silent: true,
    Text: "button",
    TextOpacity: 0,
  }),
  new Button({
    Rows: 1,
    Columns: 1,
    BgMedia:
      "https://trello-attachments.s3.amazonaws.com/60e56fbb1e591f60a7df222b/60e56fc5e3abf34465e84a1f/c59ce26bb5d4c9c070d41bbc9d699580/1.png",
    ActionBody: "TEXTBUTTON",
    Silent: true,
    Text: "text button",
    TextOpacity: 0,
  }),
];

export interface IMenuElement {
  element_type: "button" | "empty_space" | "text_label";
}

export interface IMenuButton extends IMenuElement {
  element_type: "button";
  title: string;
  payload: string;
  type?: "reply" | "open-url";
  columns?: number;
  image?: string;
}

export interface IMenuEmptySpace extends IMenuElement {
  element_type: "empty_space";
  columns?: number;
}

export interface IMenuTextLabel extends IMenuElement {
  element_type: "text_label";
  columns?: number;
  text: string;
}

export function dynamicButton(
  title: string,
  payload: string,
  type: "reply" | "open-url" = "reply",
  columns = 3,
  image?: string
): Button {
  return new Button({
    Columns: columns,
    Rows: 1,
    BgColor: colors.redMain,
    ActionType: type,
    ActionBody: payload,
    Text: `<font color="#ffffff"><b>${title}</b></font>`,
    Image: image,
    TextVAlign: "middle",
    TextHAlign: "center",
    TextSize: "large",
    Silent: image ? true : false,
    BgMediaScaleType: "crop",
    BgMedia:
      columns === 6
        ? "https://trello-attachments.s3.amazonaws.com/609905daa1eb52189fbbde4d/6099082f2eb0b135dc2225ad/1b0edb86ebedf3fd060c4668789d290f/red-gradient-background-1542348556NTz.jpg"
        : columns === 3
        ? "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        : columns === 2
        ? "https://images.unsplash.com/photo-1598476543599-72c8a60894d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        : columns === 1
        ? "https://trello-attachments.s3.amazonaws.com/609905daa1eb52189fbbde4d/6099082f2eb0b135dc2225ad/1b0edb86ebedf3fd060c4668789d290f/red-gradient-background-1542348556NTz.jpg"
        : undefined,
    Frame: {
      BorderColor: colors.darkBlue,
      BorderWidth: columns === 3 ? 4 : 0,
      CornerRadius: 6,
    },
  });
}

function emptySpace(columns = 3) {
  return new Button({
    Columns: columns,
    Rows: 1,
    BgColor: colors.redMain,
    ActionType: "none",
    ActionBody: "none",
  });
}

function textLabel(text: string, columns = 3) {
  return new Button({
    Columns: columns,
    Rows: 1,
    BgColor: colors.redMain,
    ActionType: "none",
    ActionBody: "none",
    TextHAlign: "left",
    TextSize: "large",
    Text: `<font color="#ffffff">${text}</font>`,
  });
}

function isMenuButton(e: IMenuElement): e is IMenuButton {
  return e.element_type === "button";
}

function isMenuTextLabel(e: IMenuElement): e is IMenuTextLabel {
  return e.element_type === "text_label";
}

export default function persistentKeyboard(
  rows: Array<IMenuButton | IMenuEmptySpace | IMenuTextLabel>[] = [],
  disableInput = true,
  showBanner = true
): Keyboard {
  const extraRows = rows.length;
  const Buttons = flatten(rows)
    .map((b) => {
      if (isMenuButton(b)) {
        return dynamicButton(b.title, b.payload, b.type, b.columns, b.image);
      }

      if (isMenuTextLabel(b)) {
        return textLabel(b.text, b.columns);
      }

      return emptySpace(b.columns);
    })
    .concat(showBanner ? banner : [])
    .concat(staticButtons);
  return new Keyboard({
    ButtonsGroupRows: 2 + extraRows,
    ButtonsGroupColumns: 6,
    BgColor: colors.redMain,
    Buttons,
    InputFieldState: disableInput ? "hidden" : "regular",
  });
}
