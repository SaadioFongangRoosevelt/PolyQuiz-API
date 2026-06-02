const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { updateScore, getLeaderboard } = require("../controllers/userController");

router.post("/score", auth, updateScore);
router.get("/leaderboard", getLeaderboard);

module.exports = router;