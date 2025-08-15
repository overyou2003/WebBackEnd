const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentCTRL");
const authMiddleware = require("../pkg/middleware");


router.post("/", authMiddleware, commentController.create); 
router.put("/", authMiddleware, commentController.update); 
router.delete("/", authMiddleware, commentController.delete); 
router.get("/post/:postId", commentController.getByPost); 

module.exports = router;
