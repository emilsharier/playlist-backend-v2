const router = require("express").Router();
const controller = require("../controllers/post");
const middleware = require("../middlewares/middlerwares");

router.post("/like", [middleware.checkDuplicateLike], controller.likePost);
router.post("/", controller.createPost);
router.put("/", controller.editPost);
router.delete("/:postId", controller.deletePost);
router.post("/comment", controller.commentOnPost);
router.delete("/like", controller.removeLikeFromPost);
router.post("/getTrendingPosts", controller.getTrendingPosts);

module.exports = router;
