const express = require("express");
const usersController = require("../controller/usersController");

const router = express.Router();

router.post("/signup", usersController.signUp);

module.exports = { router };
