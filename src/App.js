import React from "react";
import "./styles.css";
import ProductPage from "./Components/ProductsPage/ProductsPage";
import ProductContextProvider from "./Context/ProductsContext";
import Nav from "./Components/Nav/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <ProductContextProvider>
        <ProductPage />
      </ProductContextProvider>
    </div>
  );
}
























































































// "typescript": "4.1.3"