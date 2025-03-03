// routes/userRoutes.js (Routes utilisateurs)
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middlewares/authMiddleware");

// Inscription
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Connexion
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer le profil utilisateur
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Mettre à jour le profil utilisateur
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { name, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Supprimer un compte utilisateur
router.delete("/profile", authMiddleware, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: "Compte supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
