import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/product"}>Product Page</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/admin"}>Edit</Link>
      {token ? (
        <Link
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
      {/* <Link to={"/signup"}>SignUp</Link> */}
    </div>
  );
};
