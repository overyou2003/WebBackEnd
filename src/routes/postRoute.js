const express = require("express");
const router = express.Router();
const postController = require("../controllers/postCTRL");
const authMiddleware = require("../pkg/middleware");

router.post("/me", authMiddleware, postController.create);
router.get("/me", authMiddleware, postController.getMine);
router.put("/:id", authMiddleware, postController.update);
router.delete("/:id", authMiddleware, postController.delete);
router.get("/", postController.getAll); 

module.exports = router;
