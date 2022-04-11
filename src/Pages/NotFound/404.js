import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      {/* ACA HACER LA TIPICA PAGINA 404 Y MOSTRAR UN LINK PARA IR A LA PAGINA PRINCIPAL - 
          VALIDAR -> SI YA INICIO SESION DEBE IR A LA PAGINA DE USUARIO SI NO IR AL HOME PARA QUE HAGA EL LOGIN
      */}
      NotFoundPage <Link to="/VinixCode_App/">Home</Link>
    </div>
  );
};
