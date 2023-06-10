import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../Pages/HomePage";
import { AboutPage } from "../Pages/AboutPage";
import { LoginPage } from "../Pages/loginPage";
import { ProductPage } from "../Pages/ProductPage";
import { AdminPage } from "../Pages/AdminPage";
import { SignUpPage } from "../Pages/SignUpPage";
import { ProtectedRoutes, Protected_routes } from "./Protected_routes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/about"
        element={
          <ProtectedRoutes>
            <AboutPage />
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/product"
        element={
          <ProtectedRoutes>
            <ProductPage />
          </ProtectedRoutes>
        }
      ></Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoutes>
            <AdminPage />
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
  );
};
