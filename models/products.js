const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  priceBefore: Number,
  priceAfter: { type: Number, required: true },
  brand: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  mainPhoto: {
    type: String,
  },
  photos: [
    {
      type: String,
    },
  ],
  departmentID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "department",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
