import { ObjectId } from 'mongodb';
import db from '../database.js';

export async function getProduct(req, res) {
  const _id = new ObjectId(req.params.id);
  console.log(_id);
  try {
    const item = await db.collection("products").findOne({ _id });
    console.log(item);
    res.send(item).status(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  try {
    const items = await db.collection("products").find().toArray();
    return res.send(items).status(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}