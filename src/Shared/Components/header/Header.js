import React from "react";
export const Header = ({ user, logaut }) => {
  return (
    <header className="px-3 d-flex justify-content-between align-items-center header">
      <h3>
        Bienvenido <b>{user.name}!</b>
      </h3>
      <button onClick={logaut} className="btn btn-danger">
        Salir
        <i className="fa-solid fa-arrow-right-to-bracket mx-1"></i>
      </button>
    </header>
  );
};
