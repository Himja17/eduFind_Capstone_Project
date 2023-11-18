const router = require("express").Router();
const exploreController = require("../controller/exploreController");

router.route("/").get(exploreController.explorePrograms);
router.route(`/programs/:id`).get(exploreController.getProgramsFromCategories)

module.exports = router;
