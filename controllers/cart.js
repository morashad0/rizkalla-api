const productModel = require("../models/products");


const addToCart = async (req, res, next) => {
    try {
      if (req.role === "customer") {
        const customer = req.customer;
        const product = await productModel.findById(req.params.productId);
        if (!product) {
          res.status(404).send("Product not found");
          return;
        }
        // check if item already added
        if (customer.lists.favorites.indexOf(product._id) === -1) {
          customer.lists.favorites.push(product._id);
          await customer.save();
        }
        res.status(200).json("product added");
      } else {
        res.status(500).json("you are not a customer");
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  