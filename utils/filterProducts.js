const departmentModel = require("../models/departments");
const productModel = require("../models/products");

const filterProducts = async (query, numOfProducts) => {
    const { brand, minPrice, maxPrice, q, sortBy, sortOrder, page, limit } =
    query;
    const filters = {};
    if (brand) {
        filters["$or"] = {"brand":brand}
    }
    
}