const router = require("express").Router();
const controller = require("../controllers/htop");

router.get("/", controller.htop);

module.exports = router;
