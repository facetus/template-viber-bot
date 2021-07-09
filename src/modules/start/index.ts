import { createModule, InMemoryUser, Module } from "@ebenos/framework";

const start: Module<InMemoryUser> = createModule("start");

export default start;

import "./actions";
