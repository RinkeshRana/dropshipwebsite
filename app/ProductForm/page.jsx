"use client";
import React, { useState, useContext } from "react";
import { ProductContext } from "../context/productcontext";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [availableQty, setAvailableQty] = useState(0);

  const { insertProduct } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      slug,
      desc,
      img,
      category,
      size,
      color,
      price,
      availableQty,
    };

    insertProduct(productData);

    // Reset the form fields after submitting
    setTitle("");
    setSlug("");
    setDesc("");
    setImg("");
    setCategory("");
    setSize("");
    setColor("");
    setPrice(0);
    setAvailableQty(0);

    try {
      const response = await fetch("/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product inserted successfully:", data);
        // Reset form fields
        setTitle("");
        setSlug("");
        setDesc("");
        setImg("");
        setCategory("");
        setSize("");
        setColor("");
        setPrice(0);
        setAvailableQty(0);
      } else {
        throw new Error("Failed to insert product");
      }
    } catch (error) {
      console.error("Error inserting product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="availableQty">Available Quantity:</label>
        <input
          type="number"
          id="availableQty"
          value={availableQty}
          onChange={(e) => setAvailableQty(Number(e.target.value))}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
