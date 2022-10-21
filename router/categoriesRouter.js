const express = require("express");
const categoriesController = require("../controller/categoriesController");

const router = express.Router();

router.get("/", categoriesController.getCategoriesName);

module.exports = { router };
