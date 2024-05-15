const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, verifyAdmin } = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", userController.registerUser);

// Login user
router.post("/login", userController.loginUser);
router.get("/getUser/:userId", protect, userController.getUser);
router.get("/getAllUsers", userController.getAllUsers);
router.put("/update", protect, userController.updateUser);

module.exports = router;
