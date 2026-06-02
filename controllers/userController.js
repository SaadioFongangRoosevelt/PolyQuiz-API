const User = require("../models/User");

exports.updateScore = async (req, res) => {
  const { score } = req.body;

  const user = await User.findById(req.user.id);

  if (score > user.bestScore) {
    user.bestScore = score;
    await user.save();
  }

  res.json({ message: "Score mis à jour" });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find()
    .sort({ bestScore: -1 })
    .limit(10)
    .select("pseudo bestScore");

  res.json(users);
};