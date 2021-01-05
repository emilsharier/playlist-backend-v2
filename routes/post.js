const router = require("express").Router();
const controller = require("../controllers/post");
const middleware = require("../middlewares/middlerwares");

router.get("/:postId", controller.likePost);
router.post("/", controller.newPost);
router.put("/", controller.editPost);
router.delete("/:postId", controller.deletePost);

module.exports = router;
