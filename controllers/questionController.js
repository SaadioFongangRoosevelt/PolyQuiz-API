const Question = require("../models/Question");

exports.getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};