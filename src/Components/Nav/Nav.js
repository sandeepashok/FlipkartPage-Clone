import "./nav.css";

export default function () {
  return (
    <div className="nav-container">
      <p className="brand-name">Flipkart</p>
      <input type="search" placeholder="search products" />
      <button>Login</button>
      <p>More</p>
      <p>Cart</p>
    </div>
  );
}
