const router = require("express").Router();
const authRoute = require("./auth");
const postRoute = require("./post");
const htopRoute = require("./htop");

const middlerwares = require("../middlewares/middlerwares");

router.use("/auth", authRoute);
router.use("/post", [middlerwares.verifyToken], postRoute);
router.use("/htop", htopRoute);

module.exports = router;
