# PolyQuiz API

API REST du backend de l'application PolyQuiz. Elle gere l'authentification des utilisateurs, la gestion des questions de quiz et le suivi des resultats.

---

## Technologies utilisees

- **Node.js** - Environnement d'execution JavaScript cote serveur
- **Express.js** - Framework web pour la creation de l'API REST
- **MongoDB** - Base de donnees NoSQL pour le stockage des donnees
- **Mongoose** - ODM (Object Data Modeling) pour interagir avec MongoDB
- **JSON Web Token (JWT)** - Gestion de l'authentification et des sessions
- **dotenv** - Gestion des variables d'environnement
- **CORS** - Gestion des acces cross-origin pour le frontend
- **Nodemon** - Rechargement automatique du serveur en developpement

---

## Prerequis

Avant de commencer, assurez-vous d'avoir installe sur votre machine :

- [Node.js](https://nodejs.org/) (version 18 ou superieure)
- [npm](https://www.npmjs.com/)
- Une instance [MongoDB](https://www.mongodb.com/) pour notre cas nous avons utilise MongoDB Compass avec stocage local

---

## Installation

1. Cloner le depot :

```bash
git clone https://github.com/SaadioFongangRoosevelt/PolyQuiz-API.git
cd PolyQuiz-API
```

2. Installer les dependances :

```bash
npm install
```

3. Creer un fichier `.env` a la racine du projet et y ajouter les variables suivantes :

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Lancer le projet

### En mode developpement

Le serveur se relance automatiquement a chaque modification grace a Nodemon :

```bash
npm run dev
```

### En mode production

```bash
node server.js
```

Le serveur sera accessible par defaut sur `http://localhost:5000`.

---

## Structure du projet

```
PolyQuiz-API/
├── controllers/       # Logique metier de chaque route
├── middlewares/       # Middleware d'authentification JWT
├── models/            # Schemas Mongoose (User, Question)
├── routes/            # Definition des routes de l'API
├── seed.js            # Script pour peupler la base de donnees
├── server.js          # Point d'entree de l'application
└── .env               # Variables d'environnement (non versionne)
```

---

## Routes disponibles

| Methode | Route                | Description                                 |
| ------- | -------------------- | ------------------------------------------- |
| POST    | `/api/auth/register` | Inscription d'un utilisateur                |
| POST    | `/api/auth/login`    | Connexion et obtention du token JWT         |
| GET     | `/api/questions`     | Recuperer toutes les questions              |
| GET     | `/api/users`         | Recuperer les informations des utilisateurs |

---

## Peupler la base de donnees

Un script de seed est disponible pour inserer des donnees de test :

```bash
node seed.js
```
