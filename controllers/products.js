const  productModel = require("../models/products");


const getAllProducts = async (req, res, next) => {
    try {
      const filteredProducts = await productModel.find();
      res.status(200).json(filteredProducts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const AddnewProduct = async (req, res, next) => {
    try {
      const ProductToBeSaved = req.body;
      const addededProduct = await productModel.create(ProductToBeSaved);
      res.status(201).json(addededProduct);
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  };

  const getProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const specificProduct = await productModel.findById(id);
      res.status(200).json(specificProduct);
    } catch (err) {
      res.json({ message: err.message });
    }
  };

  module.exports = {
    getAllProducts,
    AddnewProduct,
    getProductById
  }