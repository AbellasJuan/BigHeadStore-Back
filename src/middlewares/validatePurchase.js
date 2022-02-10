import purchaseSchema from "../schemas/purchaseSchema.js";

export function validatePurchase(req, res, next) {
  const purchase = req.body;

  const validation = purchaseSchema.validate(purchase);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}