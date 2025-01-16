import { create } from "../controllers/tickets/create.js";
import { read } from "../controllers/tickets/read.js";

export const clothing = [
  {
    method: "POST",
    path: "/clothes",
    controller: create,
  },
  {
    method: "GET",
    path: "/clothes",
    controller: read,
  },
];
