import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function Layout() {
  return (
    <>
      <nav style={{padding:12, borderBottom:"1px solid #ddd"}}>
        <Link to="/" style={{marginRight:12}}>Home</Link>
        <Link to="/products" style={{marginRight:12}}>Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main style={{padding:20}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
