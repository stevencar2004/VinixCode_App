import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context/Context";
import { UseAuth } from "../../Hooks/Auth/UseAuth";
import { Header } from "../../Shared/Components/header/Header";

export const NewPost = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("USER")));
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("Token")));

  const {
    createNewPost,
    saveValuesNewPost,
    isErrorCreatePost,
    logaut,
    isCreatedPost,
    setIsCreatedPost,
    newPostForm,
    getPost,
    post,
    setNewPostForm,
  } = useContext(Context);

  let navigate = useNavigate();
  let { id } = useParams();

  UseAuth();

  useEffect(() => {
    getPost(id);
    setNewPostForm({ title: post.title, body: post.body });
  }, []);

  useEffect(() => {
    if (isCreatedPost) {
      setTimeout(() => {
        setIsCreatedPost(false);
        navigate("/user-profile");
      }, 500);
    }
  }, [isCreatedPost]);

  const handleSubmit = (e) => {
    createNewPost(e, id, token);
  };

  return (
    <div>
      <Header logaut={logaut} user={user} />

      <section className="d-flex justify-content-center mt-5">
        <form onSubmit={handleSubmit} className="form-80" method="post">
          <h2 className="mb-4 fs-1">{id ? "Actualizar" : "Crear"} un Post</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titulo
            </label>

            <input
              type="text"
              name="title"
              placeholder="Mi primera Nota"
              onChange={saveValuesNewPost}
              value={newPostForm.title}
              minLength="4"
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Contenido
            </label>

            <textarea
              onChange={saveValuesNewPost}
              className="form-control"
              placeholder="Soy una nota"
              value={newPostForm.body}
              name="body"
              id="body"
              style={{ height: "100px", maxHeight: "300px" }}></textarea>
          </div>

          <div className="mt-4 d-flex align-items-center gap-3">
            {id ? (
              <button type="submit" className="btn btn-success w-25">
                Actualizar
                <i className="fa-solid fa-pen-to-square mx-1"></i>
              </button>
            ) : (
              <button type="submit" className="btn btn-success w-25">
                <i className="fa-solid fa-plus mx-1"></i>
                Crear
              </button>
            )}
            <Link to="/user-profile" className="">
              Regresar
            </Link>
          </div>

          {isErrorCreatePost && (
            <div className="alert alert-danger mt-3" role="alert">
              Campos vacios u ocurrio un error, vuelve a intentar
            </div>
          )}
          {isCreatedPost && (
            <div className="alert alert-success mt-3" role="alert">
              Post {id ? "actualizado " : "creado"} correctamente
            </div>
          )}
        </form>
      </section>
    </div>
  );
};
