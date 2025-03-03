const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");
const authMiddleware = require("../middlewares/authMiddleware");

// Initialiser un paiement
router.post("/payments", authMiddleware, async (req, res) => {
  try {
    const { orderId, amount } = req.body;
    
    // Générer un identifiant de transaction
    const transactionId = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const payment = new Payment({ user: req.user.id, order: orderId, amount, transactionId });
    await payment.save();

    // Simuler un appel API vers Mobile Money (ici, on ferait une requête à un vrai service)
    res.json({ message: "Paiement en attente de confirmation", payment });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Vérifier le statut d'un paiement
router.get("/payments/:id", authMiddleware, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: "Paiement introuvable" });

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
