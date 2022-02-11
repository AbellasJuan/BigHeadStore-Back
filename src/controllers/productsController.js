import db from '../database.js';

export async function getProduct(req, res) {
  const _id = req.body;

  try {
    const item = await db.collection("products").findOne({ _id });
    res.send(item).status(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}