import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import db from '../db.js';

export async function createPurchase(req, res) {
  //{products: [product, product], totalPrice}
  const purchase = req.body;
  const { user } = res.locals;

  try {
    const newPurchase = {
      ...purchase,
      id: uuid(),
      date: dayjs().format('DD-MM-YYYY HH:mm:ss')
    };

    await db.collection("users").updateOne(
      { _id: user._id },
      {
        $push: { purchases: newPurchase }
      }
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getUser(req, res) {
  const { user } = res.locals;

  if (!user) {
    return res.sendStatus(401);
  }

  return res.sendStatus(200);
}