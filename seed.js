const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();

const questions = [
  {
    category: "Manga",
    text: "Qui est Naruto ?",
    options: ["Ninja", "Pirate", "Samouraï"],
    correctAnswer: "Ninja"
  },
  {
    category: "F1",
    text: "Qui est champion 2021 ?",
    options: ["Hamilton", "Verstappen"],
    correctAnswer: "Verstappen"
  }
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Question.deleteMany();
  await Question.insertMany(questions);

  console.log("Base de Donnees remplie !");
  process.exit();
};

seedDB();