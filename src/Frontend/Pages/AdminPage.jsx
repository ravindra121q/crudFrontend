import axios from "axios";
import React, { useState } from "react";

export const AdminPage = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [deleten, setDeleten] = useState("");
  const [update_name, setUpdate_name] = useState("");
  const [update_brand, setUpdate_brand] = useState("");
  const [update_price, setUpdate_price] = useState(0);
  const [update_category, setUpdate_category] = useState("");
  const [old_name, setOld_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, brand, price, category };
    if (name == "" || brand == "" || price == 0 || category == "") {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("https://fluffy-cow-yoke.cyclic.app/add/user/product", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const handleDelete = () => {
    if (deleten == "") {
      alert("Please select a product");
      return;
    }
    axios
      .delete(`https://fluffy-cow-yoke.cyclic.app/user/product/${deleten}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        return res.data.msg;
      });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(update_name, update_brand, update_price, update_category);
    if (
      update_name == "" ||
      update_brand == "" ||
      update_price == 0 ||
      update_category == ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    const payload = {
      name: update_name,
      brand: update_brand,
      price: update_price,
      category: update_category,
    };
    axios
      .patch(
        `https://fluffy-cow-yoke.cyclic.app/user/product/update/${old_name}`,
        payload,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => console.log(res));
    setUpdate_name("");
    setUpdate_brand("");
    setUpdate_price(0);
    setUpdate_category("");
  };
  return (
    <div>
      <h1>Edit Page</h1>
      <div style={{ textAlign: "center" }}>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <br />
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="brand"
          />
          <br />
          <input
            type="number"
            value={price}
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={category}
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <input type="submit" />
          <br />
        </form>
        <div>
          <h3>Delete Product</h3>
          <input
            type="text"
            onChange={(e) => setDeleten(e.target.value)}
            placeholder="name"
          />
          <br />
          <input type="submit" onClick={handleDelete} />
        </div>
        <br />
        <div>
          <h3>Update Product</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="product_id"
              onChange={(e) => setOld_name(e.target.value)}
              value={old_name}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setUpdate_name(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="brand"
              onChange={(e) => setUpdate_brand(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="price"
              onChange={(e) => setUpdate_price(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="category"
              onChange={(e) => setUpdate_category(e.target.value)}
            />
            <br />
            <input type="submit" />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};
