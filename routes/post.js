const router = require("express").Router();
const controller = require("../controllers/post");

router.get("/:postId", controller.likePost);
router.post("/", controller.newPost);
router.put("/", controller.editPost);
router.delete("/:postId", controller.deletePost);

module.exports = router;
