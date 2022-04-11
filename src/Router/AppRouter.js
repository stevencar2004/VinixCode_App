import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewPost } from "../Pages/CreatePost/NewPost";
import { DeletePost } from "../Pages/DeletePost/DeletePost";
import { HomePage } from "../Pages/Home/HomePage";
import { LoginPage } from "../Pages/LoginUser/LoginPage";
import { NotFoundPage } from "../Pages/NotFound/404";
import { PostDetails } from "../Pages/PostDetails/PostDetails";
import { RegisterPage } from "../Pages/RegisterUser/RegisterPage";
import { UserProfile } from "../Pages/UserProfile";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* RUTAS CON LA AUTENTICACION */}
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/new-post/:id" element={<NewPost />} />
        <Route path="/delete-post/:id" element={<DeletePost />} />
        <Route path="/post/:id" element={<PostDetails />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
