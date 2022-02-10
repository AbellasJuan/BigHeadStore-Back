import joi from 'joi';

const purchaseSchema = joi.object({
  products: joi.array().min(1),
  totalPrice: joi.number().required(),
});

export default purchaseSchema;