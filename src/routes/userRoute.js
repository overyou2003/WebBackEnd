const express = require("express");
const router = express.Router();
const userController = require("../controllers/userCTRL");
const authMiddleware = require("../pkg/middleware")
router.post("/register", userController.register);
router.post("/login", userController.login);

router.put("/", authMiddleware, userController.update);
router.delete("/", authMiddleware, userController.delete);

module.exports = router;
