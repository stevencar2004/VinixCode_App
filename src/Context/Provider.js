import React, { useState } from "react";
import { createPost } from "../Controllers/Services/PostServices/createPost";
import { deletePost } from "../Controllers/Services/PostServices/deletePost";
import { editPost } from "../Controllers/Services/PostServices/editPost";
import { getPostById } from "../Controllers/Services/PostServices/getPost";
import { loginUser } from "../Controllers/Services/UserServices/loginUser";
import { registerUser } from "../Controllers/Services/UserServices/registerUser";
import { Context } from "./Context";

export const ProviderVinix = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("Token")));

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [formDataRegister, setFormDataRegister] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [newPostForm, setNewPostForm] = useState({
    title: "",
    body: "",
  });

  const [existError, setExistError] = useState(null);
  const [activeSession, setActiveSession] = useState(false);

  const [isDeletedPost, setIsDeletedPost] = useState(false);
  const [isErrorDeletePost, setIsErrorDeletePost] = useState(false);

  const [post, setPost] = useState({});

  const [isErrorCreatePost, setIsErrorCreatePost] = useState(false);
  const [isCreatedPost, setIsCreatedPost] = useState(false);

  const [passwordEquals, setPasswordEquals] = useState(null);
  const [formRegisterIsValid, setFormRegisterIsValid] = useState(false);

  const validateLogin = async (e) => {
    e.preventDefault();

    if (loginForm.email === "" || loginForm.password === "") {
      setExistError(true);
    }

    try {
      const res = await loginUser(loginForm);
      window.localStorage.setItem("Token", JSON.stringify(res.data.access_token));
      window.localStorage.setItem("USER", JSON.stringify(res.data.user));
      setExistError(false);
      setActiveSession(true);
    } catch (error) {
      setExistError(true);
    }
  };

  const saveValuesLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginForm({ ...loginForm, [name]: value });
  };

  const validateFormRegister = async (e) => {
    e.preventDefault();

    try {
      if (formDataRegister.email !== "" && formDataRegister.name !== "") {
        if (formDataRegister.password === formDataRegister.password_confirmation) {
          const res = await registerUser(formDataRegister);
          setPasswordEquals(true);
          if (res.status === 201) {
            setFormRegisterIsValid(true);
          }
        } else {
          setPasswordEquals(false);
        }
      }
    } catch (error) {
      setPasswordEquals(false);
      setFormRegisterIsValid(false);
    }
  };

  const saveValuesRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormDataRegister({ ...formDataRegister, [name]: value });
  };

  const createNewPost = async (e, id, token) => {
    setIsCreatedPost(false);
    e.preventDefault();

    try {
      if (newPostForm.body !== "" && newPostForm.title !== "") {
        if (id) {
          console.log(newPostForm);
          console.log(id, token, newPostForm);
          const res = await editPost(id, token, newPostForm);
          console.log(res);
        } else {
          console.log(newPostForm);
          const res = await createPost(token, newPostForm);
          console.log(res);
        }
        setIsErrorCreatePost(false);
        setIsCreatedPost(true);
      } else {
        setIsErrorCreatePost(true);
      }
    } catch (error) {
      setIsErrorCreatePost(true);
    }
  };

  const saveValuesNewPost = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewPostForm({ ...newPostForm, [name]: value });
  };

  const validateDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 204) {
        setIsDeletedPost(true);
      }
    } catch (error) {
      setIsErrorDeletePost(true);
    }
  };

  const getPost = async (id) => {
    const res = await getPostById(id);
    setPost(res.data);
    setNewPostForm({ title: res.data.title, body: res.data.body });
  };

  const logaut = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("USER");
    setActiveSession(false);
  };

  return (
    <Context.Provider
      value={{
        loginForm,
        existError,
        activeSession,
        passwordEquals,
        formRegisterIsValid,
        newPostForm,
        isErrorCreatePost,
        isCreatedPost,
        isDeletedPost,
        isErrorDeletePost,
        post,
        validateLogin,
        saveValuesLogin,
        logaut,
        setActiveSession,
        saveValuesRegister,
        validateFormRegister,
        createNewPost,
        saveValuesNewPost,
        setIsCreatedPost,
        validateDeletePost,
        setIsDeletedPost,
        setNewPostForm,
        getPost,
      }}>
      {children}
    </Context.Provider>
  );
};
