// routes/deliveryRoutes.js (Routes pour les livreurs)
const express = require("express");
const router = express.Router();
const Deliverer = require("../models/Deliverer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middlewares/authMiddleware");

// Inscription d'un livreur
router.post("/deliverers/register", async (req, res) => {
  try {
    const { name, email, password, phone, vehicleType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const deliverer = new Deliverer({ name, email, password: hashedPassword, phone, vehicleType });
    await deliverer.save();
    res.status(201).json(deliverer);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Connexion d'un livreur
router.post("/deliverers/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const deliverer = await Deliverer.findOne({ email });
    if (!deliverer) return res.status(400).json({ message: "Livreur non trouvé" });

    const isMatch = await bcrypt.compare(password, deliverer.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ id: deliverer._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, deliverer });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer le profil du livreur
router.get("/deliverers/profile", authMiddleware, async (req, res) => {
  try {
    const deliverer = await Deliverer.findById(req.user.id).select("-password");
    res.json(deliverer);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Mettre à jour le profil du livreur
router.put("/deliverers/profile", authMiddleware, async (req, res) => {
  try {
    const { name, phone, vehicleType } = req.body;
    const deliverer = await Deliverer.findByIdAndUpdate(req.user.id, { name, phone, vehicleType }, { new: true });
    res.json(deliverer);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Supprimer un compte livreur
router.delete("/deliverers/profile", authMiddleware, async (req, res) => {
  try {
    await Deliverer.findByIdAndDelete(req.user.id);
    res.json({ message: "Compte supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Liste des livreurs (optionnel, pour un admin)
router.get("/deliverers", async (req, res) => {
  try {
    const deliverers = await Deliverer.find().select("-password");
    res.json(deliverers);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Routes pour les commandes
const Order = require("../models/Order");

// Création d'une commande
router.post("/orders", authMiddleware, async (req, res) => {
  try {
    const { items, totalPrice, deliveryAddress, status, businessId } = req.body;
    const order = new Order({ user: req.user.id, items, totalPrice, deliveryAddress, status, businessId });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer toutes les commandes d'un utilisateur
router.get("/orders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("businessId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Mettre à jour le statut d'une commande
router.put("/orders/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Supprimer une commande
router.delete("/orders/:id", authMiddleware, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
