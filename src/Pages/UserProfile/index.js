import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { UseAuth } from "../../Hooks/Auth/UseAuth";
import { Header } from "../../Shared/Components/header/Header";
import { ListPosts } from "./Components/ListPosts";

import "./styles/main.css";

export const UserProfile = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("USER")));
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("Token")));

  const { logaut } = useContext(Context);

  UseAuth();

  return (
    <section className="">
      <Header logaut={logaut} user={user} />

      <section className="mt-4 px-3">
        <ListPosts token={token} />

        <div className="addPost">
          <Link to="/VinixCode_App/new-post" className="btn btn-success addPost__btn">
            <i className="fa-solid fa-plus mx-1"></i>
            Agregar Post
          </Link>
        </div>
      </section>
    </section>
  );
};
