import React from "react";
import { Link } from "react-router-dom";
import { useGetPosts } from "../../../Hooks/useGetPosts";
import { formateDate } from "../../../Shared/Utilities/formateDate";

export const ListPosts = ({ token }) => {
  const { ListPosts, isLoading, isErrorLoading } = useGetPosts(token);

  return (
    <div className="row">
      {isErrorLoading ? (
        <div>Opps... Vuelve a intentarlo</div>
      ) : (
        <>
          {!isLoading ? (
            <div className="row mt-2">
              {ListPosts.length === 0 ? (
                <h2 className="text-center fs-1">
                  No hay Posts... <b>Crea uno!!</b>
                </h2>
              ) : (
                <>
                  {ListPosts.map((post) => (
                    <section key={post.id} className="col mb-3 post-box">
                      <div className="card post-card">
                        <div className="card-body">
                          <Link
                            to={`/VinixCode_App/post/${post.id}`}
                            className="card-title fw-bold fs-3 text-dark mb-2"
                          >
                            {post.title}
                          </Link>
                          <p className="mb-3">{post.body}</p>
                          <p className="text-muted fw-light">
                            Ultima fecha de actualizacion: {formateDate(post.updated_at)}
                          </p>

                          <div className="d-flex gap-2 post-controls">
                            <Link
                              to={`/VinixCode_App/new-post/${post.id}`}
                              className="btn btn-primary "
                            >
                              Editar
                              <i className="fa-solid fa-pen-to-square mx-1"></i>
                            </Link>
                            <Link
                              to={`/VinixCode_App/delete-post/${post.id}`}
                              className="btn btn-danger"
                            >
                              Borrar
                              <i className="fa-solid fa-trash mx-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <strong>Cargando...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
