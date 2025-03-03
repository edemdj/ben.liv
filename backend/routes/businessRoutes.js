// routes/businessRoutes.js (Routes pour les commerces)
const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const authMiddleware = require("../middlewares/authMiddleware");

// Création d'un commerce
router.post("/businesses", authMiddleware, async (req, res) => {
  try {
    const { name, category, address, phone } = req.body;
    const business = new Business({
      name,
      category,
      address,
      phone,
      owner: req.user.id, // L'utilisateur connecté est le propriétaire
    });
    await business.save();
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Liste de tous les commerces
router.get("/businesses", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Détails d'un commerce spécifique
router.get("/businesses/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ message: "Commerce non trouvé" });
    res.json(business);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Mise à jour d'un commerce
router.put("/businesses/:id", authMiddleware, async (req, res) => {
  try {
    const { name, category, address, phone } = req.body;
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ message: "Commerce non trouvé" });
    
    // Vérifie si l'utilisateur est le propriétaire
    if (business.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Accès interdit" });
    }
    
    business.name = name || business.name;
    business.category = category || business.category;
    business.address = address || business.address;
    business.phone = phone || business.phone;
    
    await business.save();
    res.json(business);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Suppression d'un commerce
router.delete("/businesses/:id", authMiddleware, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ message: "Commerce non trouvé" });
    
    if (business.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Accès interdit" });
    }
    
    await business.deleteOne();
    res.json({ message: "Commerce supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
