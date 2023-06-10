import axios from "axios";
import React, { useState } from "react";

export const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    const payload = { name, email, password };
    axios
      .post(`https://fluffy-cow-yoke.cyclic.app/add/user`, payload)
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status) {
          alert("User Added Successfully");
        } else {
          alert(res.data.msg);
        }
      });
  };
  return (
    <div>
      <h1>SignUpPage</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "20px",
          width: "290px",
          margin: "auto",
          marginTop: "40px",
          border: "1px solid black",
          borderRadius: "8px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};
