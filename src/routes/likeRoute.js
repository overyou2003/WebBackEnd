const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeCTRL");
const authMiddleware = require("../pkg/middleware");


router.post("/", authMiddleware, likeController.like); 
router.delete("/", authMiddleware, likeController.unlike); 
router.get("/:postId/count", likeController.count); 

module.exports = router;
