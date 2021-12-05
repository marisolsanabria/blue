const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("", UserController.signup);
module.exports = router;