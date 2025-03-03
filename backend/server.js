// server.js (Point d'entrée du backend)
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const { connectDB } = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

// config/db.js (Connexion à MongoDB)
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion MongoDB", error);
    process.exit(1);
  }
};
module.exports = { connectDB };

// models/User.js (Modèle utilisateur)
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["client", "commerçant"], default: "client" },
});
module.exports = mongoose.model("User", userSchema);

// routes/userRoutes.js (Routes utilisateurs)
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;

// middlewares/authMiddleware.js (Middleware d'authentification)
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Accès non autorisé" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};
module.exports = authMiddleware;
