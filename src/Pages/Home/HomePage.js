import React from "react";
import { Link } from "react-router-dom";

import "./styles/main.css";

export const HomePage = () => {
  return (
    <div className=" banner allPage">
      <div className="banner__text m-2 px-2 py-3 px-md-4 py-md-5">
        <h2 className="text-center banner__title fs-1">
          Welcome To My Technical Test - VinixCode
        </h2>

        <div className="mt-3 mt-md-4 d-flex justify-content-center">
          <Link
            to="/login"
            className="btn btn-primary w-25 d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-primary mx-2 w-25">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
