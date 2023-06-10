import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, pass);
    const payload = { email, password: pass };

    axios
      .post("https://fluffy-cow-yoke.cyclic.app/user/login", payload, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODNkOTJkNTFhMmFkODhiNWI0NjA2NSIsImlhdCI6MTY4NjM2MzIyMywiZXhwIjoxNjg2OTY4MDIzfQ.AaEwet9KH_ru9NJzek4IdjvQ8s8C-LNMHedtkPNYUvk`,
        },
      })
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        if (token) {
          localStorage.setItem("token", token);
          alert("Login Successful");
          console.log(location);
          return navigate(location.state);
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "50px",
          width: "290px",
          margin: "auto",
          marginTop: "40px",
          border: "1px solid black",
          borderRadius: "8px",
        }}
        onSubmit={submitHandler}
      >
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={pass}
          placeholder="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <br />
        <input type="submit" />
        <h6>
          Don't have an account? <Link to="/signup">SignUp</Link>
        </h6>
      </form>
    </div>
  );
};
