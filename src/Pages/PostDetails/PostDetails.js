import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../Context/Context";
import { UseAuth } from "../../Hooks/Auth/UseAuth";
import { Header } from "../../Shared/Components/header/Header";

export const PostDetails = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("USER")));
  let { id } = useParams();

  const { logaut, getPost, post } = useContext(Context);

  useEffect(() => {
    getPost(id);
    console.log(post);
  }, []);

  UseAuth();

  return (
    <div>
      <Header logaut={logaut} user={user} />
      <section key={id} className="d-flex justify-content-center mt-4">
        {post ? (
          <div className="post-card w-50" style={{ height: 300 }}>
            <div className="card-body">
              <h2 className="card-title fw-bold fs-1 text-dark mb-2">{post.title}</h2>
              <p className="mb-3 fs-4">{post.body}</p>
              <p className="text-muted fw-light fs-5">Ultima fecha de actualizacion:</p>
              <p className="mb-3 fs-5 mb-3">Id Post: {post.id}</p>

              <div className="d-flex gap-2 post-controls align-items-center">
                <Link to={`/new-post/${post.id}`} className="btn btn-primary ">
                  Editar
                  <i class="fa-solid fa-pen-to-square mx-1"></i>
                </Link>

                <Link to={`/delete-post/${post.id}`} className="btn btn-danger">
                  Borrar
                  <i class="fa-solid fa-trash mx-1"></i>
                </Link>

                <Link to={`/user-profile`} className="">
                  Regresar
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h2>Error Post no encontrado... vuelve a intentarlo</h2>
        )}
      </section>
    </div>
  );
};
