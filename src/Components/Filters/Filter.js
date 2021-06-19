import React, { useContext, useState } from "react";
import "./filter.css";
import { ProductContext } from "../../Context/ProductsContext";

export default function Filter() {
  const {
    productList,
    sortProductCards,
    departmentSelectionHandler,
    categorySelectionHandler,
    brandSelectionHandler,
    filterState,
    clearAll,
    sizeSelectionHandler
  } = useContext(ProductContext);

  const Categories = [];
  const brands = [];
  const productListCopy = [...productList];

  productListCopy.forEach((product) => {
    if (Categories.indexOf(product.category) === -1) {
      Categories.push(product.category);
    }
    if (brands.indexOf(product.brand) === -1) {
      brands.push(product.brand);
    }
  });

  return (
    <div className="filters">
      <header className="header">
        <p className="heading">Filters</p>
        <button className="clear-all" onClick={() => clearAll()}>
          Clear All
        </button>
      </header>
      <ul className="filters-container">
        <li className="sub-heading">Sort By</li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="radio"
              name="sort"
              value="low-to-high"
              checked={filterState.sort.includes("asc")}
              onChange={() => sortProductCards("asc")}
            />
            Price low to high
          </label>
        </li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="radio"
              name="sort"
              value="high-to-low"
              checked={filterState.sort.includes("dec")}
              onChange={() => sortProductCards("dec")}
            />
            Price high to low
          </label>
        </li>
        <hr className="filter-divider-line"></hr>
        <li className="sub-heading">Department</li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="Department"
              value="women"
              checked={filterState.department.includes("women")}
              onChange={() => departmentSelectionHandler("women")}
            />
            Women's
          </label>
        </li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="men"
              value="Department"
              checked={filterState.department.includes("men")}
              onChange={() => departmentSelectionHandler("men")}
            />
            Men's
          </label>
        </li>
        <hr className="filter-divider-line"></hr>
        <li className="sub-heading">Categories</li>
        {Categories.map((category) => {
          return (
            <li key={category} className="list-items">
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={filterState.categories.includes(category)}
                  onChange={() => categorySelectionHandler(category)}
                />
                {category}
              </label>
            </li>
          );
        })}
        <hr className="filter-divider-line"></hr>
        <li className="sub-heading">Brands</li>
        {brands.map((brand) => {
          return (
            <li key={brand} className="list-items">
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  value={brand}
                  checked={filterState.brands.includes(brand)}
                  onChange={() => brandSelectionHandler(brand)}
                />
                {brand}
              </label>
            </li>
          );
        })}
        <hr className="filter-divider-line"></hr>
        <li className="sub-heading">size</li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="size"
              value="small"
              checked={filterState.size.includes("S")}
              onChange={() => sizeSelectionHandler("S")}
            />
            S
          </label>
        </li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="size"
              value="medium"
              checked={filterState.size.includes("M")}
              onChange={() => sizeSelectionHandler("M")}
            />
            M
          </label>
        </li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="size"
              value="Large"
              checked={filterState.size.includes("L")}
              onChange={() => sizeSelectionHandler("L")}
            />
            L
          </label>
        </li>
        <li className="list-items">
          <label className="form-label">
            <input
              className="form-checkbox-field"
              type="checkbox"
              name="size"
              value="x-large"
              checked={filterState.size.includes("XL")}
              onChange={() => sizeSelectionHandler("XL")}
            />
            XL
          </label>
        </li>
      </ul>
    </div>
  );
}
