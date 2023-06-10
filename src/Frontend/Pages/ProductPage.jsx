import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductPage = () => {
  const [productDatabase, setProductDatabase] = useState([]);
  useEffect(() => {
    axios
      .get("https://fluffy-cow-yoke.cyclic.app/user/product", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setProductDatabase(res.data.msg))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>ProductPage</h1>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          padding: "10px",
        }}
      >
        {productDatabase.map((e) => {
          console.log(e);
          return (
            <div
              key={e._id}
              style={{ border: "1px solid green", borderRadius: "8px" }}
            >
              <h1>{e.name}</h1>
              <h2>{e.brand}</h2>
              <h3>{e.price}</h3>
              <h4>{e.category}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
