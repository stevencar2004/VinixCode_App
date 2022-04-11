import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import { UseAuthLogin } from "../../Hooks/Auth/UseAuthLogin";

import "./styles/main.css";

export const LoginPage = () => {
  const { validateLogin, saveValuesLogin, existError, activeSession, token } =
    useContext(Context);

  UseAuthLogin();

  let navigate = useNavigate();

  useEffect(() => {
    if (activeSession) {
      navigate("/user-profile");
    }
  }, []);

  return (
    <div className="allPage py-3 px-2">
      <form method="post" onSubmit={validateLogin} className="form-60">
        <h2 className="text-center mb-4 fs-1">Iniciar Sesion</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="username@example.com"
            onChange={saveValuesLogin}
            minLength="4"
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>

          <input
            type="password"
            name="password"
            placeholder="***********"
            onChange={saveValuesLogin}
            minLength="5"
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 my-2">
          Ingresar
        </button>
        <Link to="/register" className="d-flex justify-content-end">
          No tienes cuenta?
        </Link>

        {existError && (
          <div className="alert alert-danger mt-3" role="alert">
            Usuario o contraseña incorrectas
          </div>
        )}
      </form>
    </div>
  );
};
