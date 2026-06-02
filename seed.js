const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();

const questions = [
  {
    category: "Manga",
    text: "Qui est Naruto ?",
    options: ["Ninja", "Pirate", "Samouraï", "enseignant"],
    correctAnswer: "Ninja"
  },
  {
    category: "F1",
    text: "Qui est champion 2021 ?",
    options: ["Hamilton", "Verstappen", "Georges Weah", "Harry Stalman"],
    correctAnswer: "Verstappen"
  },
  {
    category: "Manga",  
    text: "Qui est le personnage principal de One Piece ?",
    options: ["Luffy", "Zoro", "Nami", "Sanji"],
    correctAnswer: "Luffy"
  },
  {
    category: "F1",
    text: "Quel est le circuit le plus rapide du calendrier ?",
    options: ["Monza", "Silverstone", "Spa-Francorchamps"],
    correctAnswer: "Monza"
  },
  {
    category: "Manga",
    text: "Quel est le nom du capitaine de l'équipage de Chapeau de Paille ?",
    options: ["Luffy", "Zoro", "Nami", "Sanji"],
    correctAnswer: "Luffy"
  },
  {
    category: "F1",
    text: "Quel pilote a remporté le plus de titres mondiaux ?",
    options: ["Michael Schumacher", "Lewis Hamilton", "Juan Manuel Fangio"],
    correctAnswer: "Michael Schumacher"
  },
  {
    category: "NBA",
    text: "Quelle est la franchise la plus titrée de l'Histoire ?",
    options: ["Lakers", "Warriors", "Bulls"],
    correctAnswer: "Lakers"
  },
  {
    category: "NBA",
    text: "Quel joueur a remporté le plus de titres de MVP ?",
    options: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar"],
    correctAnswer: "Kareem Abdul-Jabbar"
  },
  {
    category: "Anime",
    text: "Lequel de ces super heros n'a pas de super  pouvoir ?",
    options: ["Superman", "Green  Lanterne", "Batman", "Shelock"],
    correctAnswer: "Batman"
  },
  {
    category: "NBA",
    text: "Lequel de ces possede une marque de basket tres populaire dans le monde?",
    options: ["Micheal Jordan", "Stephen Curry", "Lebron James", "Joachim Noah"],
    correctAnswer: "Micheal Jordan"
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