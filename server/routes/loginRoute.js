const router = require("express").Router();
const loginController = require("../controller/loginController");

router.route("/").post(loginController.loginUser);

module.exports = router;
