import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import du CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MonSite</h2>
      </div>
      
      {/* Icône du menu burger */}
      <div className="burger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      {/* Liens du menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Connexion</Link></li>
        <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profil</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
