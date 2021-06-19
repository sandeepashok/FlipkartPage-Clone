import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../../Context/ProductsContext";
import "./product-page.css";
import Filter from "../Filters/Filter";

export default function ProductPage() {
  const { allProducts } = useContext(ProductContext);
  return (
    <div className="product-page-container">
      <div className="filter-container">
        <Filter />
      </div>
      <div className="product-list">
        {allProducts.map((product) => {
          return <ProductCard product={product} key={product.itemId} />;
        })}
      </div>
    </div>
  );
}
