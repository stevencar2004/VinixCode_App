import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../Context/Context";

export const RegisterPage = () => {
  const {
    passwordEquals,
    validateFormRegister,
    saveValuesRegister,
    formRegisterIsValid,
  } = useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    if (formRegisterIsValid) {
      navigate("/VinixCode_App/login");
    }
  }, [formRegisterIsValid]);

  return (
    <div className="allPage px-2">
      <form
        className="d-flex flex-column form-80"
        onSubmit={validateFormRegister}
        method="post"
      >
        <div className="form__header">
          <h2 className="text-center fs-1 mb-4">Crear Cuenta</h2>
        </div>

        <div className="form__body">
          <div className="row mb-4 gy-4">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="name">
                Nombre:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="pepito perez"
                onChange={saveValuesRegister}
                minLength="4"
                required
                className="form-control"
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="username@example.com"
                onChange={saveValuesRegister}
                minLength="5"
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                onChange={saveValuesRegister}
                minLength="6"
                required
                className="form-control"
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="password_confirmation">
                Confirm Password:
              </label>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="***********"
                onChange={saveValuesRegister}
                minLength="6"
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="mt-3">
            <button type="submit" className="btn btn-primary w-100 my-2">
              Registrar
            </button>
            <Link to="/VinixCode_App/login" className="d-flex justify-content-end">
              Ya tienes Cuenta?
            </Link>
          </div>

          {passwordEquals === false && (
            <div className="alert alert-danger mt-3" role="alert">
              Las contraseñas no son iguales o el usuario no es valido
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
