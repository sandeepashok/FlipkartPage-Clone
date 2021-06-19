import React from "react";
import "./product-card.css";
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img alt="product-item" src={product.imageURL} className="product-img" />
      <p className="product-brand">{product.brand}</p>
      <p className="product-title">{product.title}</p>
      <div className="product-pricing">
        <p className="product-price">₹{product.price}</p>
        <p className="product-mrp">{product.mrp}</p>
        <p className="product-discount">{product.discount}% off</p>
      </div>
    </div>
  );
}
