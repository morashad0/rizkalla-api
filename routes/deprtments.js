const express = require("express");
const { getAllDepartments, getDepById,AddnewDep } = require("../controllers/departments");
const router = express.Router();

// get all departments
router.get("/", getAllDepartments);

// get department by id
router.get("/:id", getDepById);

router.post("/", AddnewDep);

module.exports = router;