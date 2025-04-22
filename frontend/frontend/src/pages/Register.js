import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
