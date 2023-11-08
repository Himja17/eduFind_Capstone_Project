const router = require("express").Router();
const registerController = require("../controller/registerController");

router.route("/").post(registerController.registerUser);
module.exports = router;
