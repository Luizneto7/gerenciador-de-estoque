import { create } from "../controllers/orders/create.js";
import { read } from "../controllers/orders/read.js";

export const orders = [
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
