const express = require("express");
const {getAllProducts,AddnewProduct,getProductById} = require ("../controllers/products");
const router = express.Router();

// get all departments
router.get("/", getAllProducts);

// get department by id
router.get("/:id", getProductById);

router.post("/", AddnewProduct);

module.exports = router;