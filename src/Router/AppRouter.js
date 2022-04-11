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
        <Route path="/VinixCode_App/" element={<HomePage />} />
        <Route path="/VinixCode_App/register" element={<RegisterPage />} />
        <Route path="/VinixCode_App/login" element={<LoginPage />} />

        {/* RUTAS CON LA AUTENTICACION */}
        <Route path="/VinixCode_App/user-profile" element={<UserProfile />} />
        <Route path="/VinixCode_App/new-post" element={<NewPost />} />
        <Route path="/VinixCode_App/new-post/:id" element={<NewPost />} />
        <Route path="/VinixCode_App/delete-post/:id" element={<DeletePost />} />
        <Route path="/VinixCode_App/post/:id" element={<PostDetails />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
