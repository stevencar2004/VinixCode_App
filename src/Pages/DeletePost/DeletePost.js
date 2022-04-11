import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context/Context";

export const DeletePost = () => {
  const {
    validateDeletePost,
    isDeletedPost,
    isErrorDeletePost,
    setIsDeletedPost,
    getPost,
    post,
  } = useContext(Context);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getPost(id);

    if (isDeletedPost) {
      setTimeout(() => {
        setIsDeletedPost(false);
        navigate("/VinixCode_App/user-profile");
      }, 500);
    }
  }, [isDeletedPost]);

  return (
    <div className="allPage">
      <section className="">
        <h2 className="fs-1 mb-3">Estas seguro que deseas eliminar este Post??</h2>

        <p className="text-muted fs-5">
          <b>Title:</b> {post?.title}
          <br></br>
          <b>Body:</b> {post?.body}
          <br></br>
          <b>Id:</b> {post?.id}
        </p>

        <div className="d-flex align-items-center gap-3">
          <button onClick={() => validateDeletePost(id)} className="btn btn-danger w-25">
            Eliminar
            <i class="fa-solid fa-trash mx-1"></i>
          </button>

          <Link to="/VinixCode_App/user-profile" className="">
            Regresar
          </Link>
        </div>

        {isErrorDeletePost && (
          <div className="alert alert-danger mt-3" role="alert">
            Ocurrio un error, vuelve a intentar
          </div>
        )}
        {isDeletedPost && (
          <div className="alert alert-success mt-3" role="alert">
            Post eliminado correctamente
          </div>
        )}
      </section>
    </div>
  );
};
