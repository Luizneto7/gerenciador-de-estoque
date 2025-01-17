import { randomUUID } from "node:crypto";

export function create({ req, res }) {
  const { costumerName, adress, item, size, quantity } = req.body;

  const order = {
    id: randomUUID(),
    costumerName,
    adress,
    item,
    size,
    quantity,
    created_at: new Date(),
  };

  return res.end(
    "Seu pedido foi realizado com sucesso " + JSON.stringify(order)
  );
}
