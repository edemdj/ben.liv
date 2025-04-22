# ben.liv

**Cahier des Charges : Plateforme de Commande et de Livraison au Bénin**

---

## 1. **Présentation du Projet**
**Nom du projet :** À définir  
**Objectif :** Créer une plateforme web permettant la commande et la livraison de repas, produits de magasins et supermarchés au Bénin. L'application offrira un espace professionnel pour que les commerces puissent gérer leurs profils et commandes.  
**Public cible :** Clients (particuliers et entreprises) et commerçants (restaurants, magasins, supermarchés).  

---

## 2. **Fonctionnalités**
### **A. Utilisateurs**
1. **Compte utilisateur**
   - Inscription avec email, téléphone ou réseaux sociaux
   - Connexion sécurisée
   - Gestion de profil (nom, adresse, téléphone, moyen de paiement préféré)
   
2. **Parcours d'achat**
   - Navigation et recherche par catégorie (restaurants, magasins, supermarchés)
   - Sélection et ajout de produits au panier
   - Validation et paiement via Mobile Money (MTN, Moov)
   - Suivi des commandes en temps réel avec notifications
   
3. **Historique et avis**
   - Consultation de l'historique des commandes
   - Notation et commentaire des produits et services
   
### **B. Commerçants (Espace Pro)**
1. **Gestion de compte**
   - Création de profil (nom du commerce, localisation, horaires, contacts)
   - Ajout/modification de menu ou catalogue de produits
   - Suivi des commandes et gestion des statuts (en attente, en préparation, livré)
   - Gestion des paiements et relevés de transactions

2. **Statistiques et analyses**
   - Suivi des ventes
   - Analyse des performances

### **C. Livreurs**
- Attribution des commandes en attente
- Géolocalisation et suivi des trajets
- Confirmation de livraison avec validation du client

---

## 3. **Stack Technique**
### **Frontend**
- **React.js** (pour une interface utilisateur dynamique et rapide)
- **Tailwind CSS** (pour un design moderne et rapide à mettre en place)

### **Backend**
- **Node.js avec Express.js** (API et gestion des requêtes)
- **Socket.io** (gestion des commandes en temps réel)

### **Base de Données**
- **MongoDB** (stockage des utilisateurs, commandes, produits)
- **MongoDB Atlas** (hébergement sécurisé de la base de données)

### **Paiement**
- Intégration des APIs **Mobile Money (MTN & Moov)**

### **Déploiement**
- **Frontend :** Vercel / Netlify
- **Backend :** VPS (DigitalOcean, AWS, OVH)
- **Base de données :** MongoDB Atlas

---

## 4. **Sécurité et Performances**
- Authentification sécurisée (JWT, OAuth)
- Protection contre les injections SQL/NoSQL
- Optimisation des requêtes pour un temps de réponse rapide

---

## 5. **Évolution et Scalabilité**
- Ajout d’une application mobile après la phase web
- Éventuelle intégration du paiement par carte bancaire
- Intégration avec des services de cartographie et de navigation

---

## 6. **Planning et Étapes du Développement**
1. **Phase 1 : Conception** (maquettes, base de données, architecture technique)
2. **Phase 2 : Développement** (frontend, backend, API, base de données)
3. **Phase 3 : Tests et corrections**
4. **Phase 4 : Déploiement et lancement**
5. **Phase 5 : Évolution et amélioration continue**

---

## 7. **Budget Prévisionnel**
- Hébergement et nom de domaine
- Développement et maintenance
- Marketing et communication
- Intégration des solutions de paiement

---

## 8. **Conclusion**
Ce projet vise à digitaliser la commande et la livraison au Bénin en proposant une solution simple, efficace et évolutive. L’espace pro pour les commerçants permet une gestion autonome, tandis que les clients bénéficient d’un service fluide et rapide.





**User Stories pour la plateforme de commande et livraison au Bénin**

## 1. Utilisateurs (Clients)

**1.1. Inscription et Connexion**
- En tant que client, je veux pouvoir m'inscrire avec mon email, mon numéro de téléphone ou via les réseaux sociaux afin d'accéder à la plateforme.
- En tant que client, je veux pouvoir me connecter à mon compte en toute sécurité pour utiliser l'application.

**1.2. Gestion du Profil**
- En tant que client, je veux pouvoir modifier mes informations personnelles (nom, adresse, numéro de téléphone, photo de profil) afin de garder mon compte à jour.
- En tant que client, je veux pouvoir enregistrer plusieurs adresses de livraison pour faciliter mes commandes.

**1.3. Recherche et Commande**
- En tant que client, je veux pouvoir rechercher des restaurants, magasins et supermarchés en fonction de ma localisation pour voir les options disponibles.
- En tant que client, je veux pouvoir parcourir les menus et catalogues des commerçants pour choisir les produits qui m'intéressent.
- En tant que client, je veux pouvoir ajouter des articles à mon panier et passer une commande.

**1.4. Paiement et Suivi de Commande**
- En tant que client, je veux pouvoir payer ma commande en toute sécurité via MTN Mobile Money.
- En tant que client, je veux recevoir une confirmation de paiement et une estimation du temps de livraison.
- En tant que client, je veux pouvoir suivre l'état de ma commande (en attente, en préparation, en cours de livraison, livrée).

## 2. Professionnels (Restaurants, Magasins, Supermarchés)

**2.1. Gestion du Profil**
- En tant que professionnel, je veux pouvoir créer un compte et renseigner les informations de mon entreprise (nom, adresse, horaires, contact, logo).
- En tant que professionnel, je veux pouvoir modifier mes informations pour les garder à jour.

**2.2. Gestion des Produits**
- En tant que professionnel, je veux pouvoir ajouter, modifier et supprimer des articles de mon catalogue afin de gérer mon offre.
- En tant que professionnel, je veux pouvoir fixer les prix de mes articles.

**2.3. Gestion des Commandes**
- En tant que professionnel, je veux recevoir les commandes des clients en temps réel.
- En tant que professionnel, je veux pouvoir changer le statut d'une commande (en préparation, prête à être livrée, annulée).

## 3. Livreurs

**3.1. Inscription et Connexion**
- En tant que livreur, je veux pouvoir m'inscrire en renseignant mes informations personnelles et mon véhicule afin d'avoir un compte validé.
- En tant que livreur, je veux pouvoir me connecter pour accéder à mes livraisons.

**3.2. Gestion des Livraisons**
- En tant que livreur, je veux voir les commandes disponibles afin de choisir celles que je peux livrer.
- En tant que livreur, je veux voir les détails d'une commande (adresse, produits, prix de la livraison) avant d'accepter.
- En tant que livreur, je veux pouvoir changer le statut d'une livraison (prise en charge, en cours, livrée).
- En tant que livreur, je veux voir mon historique de livraisons et mes gains.

## 4. Administrateur

**4.1. Gestion des Utilisateurs**
- En tant qu'administrateur, je veux pouvoir voir et gérer les comptes des utilisateurs.
- En tant qu'administrateur, je veux pouvoir bloquer un utilisateur en cas de non-respect des règles.

**4.2. Gestion des Professionnels**
- En tant qu'administrateur, je veux pouvoir approuver ou refuser l'inscription des professionnels.
- En tant qu'administrateur, je veux pouvoir vérifier les catalogues des professionnels.

**4.3. Supervision des Commandes et Paiements**
- En tant qu'administrateur, je veux avoir un tableau de bord pour suivre toutes les commandes et leur statut.
- En tant qu'administrateur, je veux voir les transactions MTN Mobile Money pour m'assurer du bon fonctionnement des paiements.

## 5. Notifications et Support

**5.1. Notifications**
- En tant que client, je veux recevoir une notification lorsque ma commande est prête ou en cours de livraison.
- En tant que professionnel, je veux recevoir une notification lorsqu'une nouvelle commande est passée.
- En tant que livreur, je veux recevoir une notification lorsqu'une nouvelle livraison est disponible.

**5.2. Support Client**
- En tant qu'utilisateur, je veux pouvoir contacter le support en cas de problème avec une commande ou un paiement.
- En tant qu'administrateur, je veux voir les demandes de support et y répondre rapidement.

---

Ce document couvre les principaux besoins fonctionnels sous forme de user stories. On pourra affiner les détails et prioriser les fonctionnalités selon l'avancement du projet.

Dis-moi si tu veux ajouter ou modifier quelque chose ! 🚀





/projet-livraison  
│── /frontend               # Dossier pour l'application web (React)  
│   ├── /public             # Assets publics (icônes, images, etc.)  
│   ├── /src                # Code source  
│   │   ├── /components     # Composants réutilisables  
│   │   ├── /pages          # Pages principales (Accueil, Profil, Commande, etc.)  
│   │   ├── /services       # Appels API (ex: gestion des commandes)  
│   │   ├── /hooks          # Hooks personnalisés  
│   │   ├── /context        # Gestion du state global  
│   │   ├── App.js          # Composant principal  
│   │   ├── index.js        # Point d’entrée  
│   ├── package.json        # Dépendances et scripts  
│   ├── tailwind.config.js  # Configuration de Tailwind CSS  
│   ├── vite.config.js      # Configuration de Vite (si utilisé)  
│  
│── /backend                # Dossier pour l'API (Node.js + Express)  
│   ├── /config             # Fichiers de configuration (DB, JWT, etc.)  
│   ├── /controllers        # Logique métier (gestion des commandes, utilisateurs, etc.)  
│   ├── /models             # Schémas de base de données (MongoDB)  
│   ├── /routes             # Définition des routes API  
│   ├── /middlewares        # Middlewares (authentification, validation, etc.)  
│   ├── /services           # Services externes (paiement Mobile Money, etc.)  
│   ├── server.js           # Fichier principal du serveur  
│   ├── package.json        # Dépendances et scripts  
│  
│── /database               # Scripts de migration et gestion de la base de données  
│   ├── /seeds              # Données d’exemple  
│   ├── db.js               # Connexion à MongoDB  
│  
│── /deploy                 # Configuration pour le déploiement (Docker, CI/CD, etc.)  
│── README.md               # Documentation du projet  



@@@@@@@

📂 Structure des dossiers frontend
📂 /frontend
└── 📂 src
    ├── 📂 components (Composants réutilisables)
    ├── 📂 pages (Pages principales)
    ├── 📂 services (Gestion des appels API)
    ├── 📂 context (Gestion de l’état global avec React Context)
    ├── 📂 assets (Images, icônes, fichiers statiques)
    ├── 📂 styles (Feuilles de styles CSS ou SCSS)
    ├── 📄 App.js (Structure principale de l’application)
    ├── 📄 index.js (Point d’entrée de l’application React)

📁 Détails de chaque dossier :

📂 components/
📍 Ce dossier contient tous les éléments réutilisables (boutons, cartes, en-têtes, etc.).
➡️ Exemple de fichiers :

📄 Navbar.js → Barre de navigation
📄 Footer.js → Pied de page
📄 RestaurantCard.js → Affichage d’un restaurant/magasin
📄 ProductCard.js → Affichage d’un produit
👉 Pourquoi ce dossier ?
✅ Pour éviter de répéter du code en créant des composants réutilisables.

📂 pages/
📍 Contient toutes les pages principales de ton site.
➡️ Exemple de fichiers :

📄 Home.js → Page d’accueil
📄 Login.js → Page de connexion
📄 Register.js → Page d’inscription
📄 Restaurants.js → Liste des restaurants/magasins
📄 Orders.js → Page de suivi des commandes
📄 Profile.js → Gestion du profil utilisateur
👉 Pourquoi ce dossier ?
✅ Pour bien organiser chaque vue de ton application.

📂 services/
📍 Contient toutes les fonctions pour appeler l’API.
➡️ Exemple de fichiers :

📄 authService.js → Connexion, inscription
📄 restaurantService.js → Récupération des restaurants
📄 orderService.js → Création et suivi des commandes
📄 paymentService.js → Gestion des paiements
👉 Pourquoi ce dossier ?
✅ Pour centraliser les appels API et éviter de mettre les requêtes directement dans les composants.

📂 context/
📍 Contient les fichiers de gestion de l’état global avec React Context.
➡️ Exemple de fichiers :

📄 AuthContext.js → Gère l’authentification des utilisateurs
📄 CartContext.js → Gère le panier des utilisateurs
👉 Pourquoi ce dossier ?
✅ Pour partager des données entre plusieurs composants sans avoir à les passer via props.

📂 assets/
📍 Contient toutes les ressources statiques (images, icônes, logos…).
➡️ Exemple de fichiers :

📂 /images/ → Pour stocker les images
📄 logo.png → Logo de l’application
👉 Pourquoi ce dossier ?
✅ Pour bien organiser toutes les ressources graphiques.

📂 styles/
📍 Contient les fichiers CSS/SCSS.
➡️ Exemple de fichiers :

📄 global.css → Styles globaux
📄 button.css → Styles des boutons
👉 Pourquoi ce dossier ?
✅ Pour séparer la logique du style et garder un code propre.

