const router = require("express").Router();
const middleware = require("../middlewares/middlerwares");
const controller = require("../controllers/index");

router.post(
  "/signIn",
  [middleware.verifyEmail],
  controller.authController.signIn
);

router.post(
  "/signUp",
  [middleware.checkForDuplicateEntry],
  controller.authController.signUp
);

module.exports = router;
