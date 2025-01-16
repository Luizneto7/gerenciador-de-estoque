export async function jsonHandler(req, res) {
  const buffers = [];

  for await (let chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  res.setHeader("Content-Type", "Application/JSON");
}
