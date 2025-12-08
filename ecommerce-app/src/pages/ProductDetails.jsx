// src/pages/ProductDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Placeholder: we will replace this when CartContext is implemented.
    // For now we show a quick feedback in console and a small alert.
    console.log("Add to cart:", product);
    alert(`${product.title} added to cart (placeholder). We'll wire up the cart next.`);
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <button onClick={() => navigate(-1)} style={{ margin: "10px 0" }}>
        ← Back
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          {/* Image — handles both remote and local paths */}
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 8 }}
            onError={(e) => {
              // fallback in case local path can't be served — show placeholder
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/600x420?text=Image+not+available";
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 style={{ margin: 0 }}>{product.title}</h2>
          <div style={{ fontSize: 20, fontWeight: 700 }}>₹{product.price}</div>
          <div style={{ color: "#555" }}>{product.description}</div>

          <div style={{ marginTop: 16 }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: "10px 14px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginRight: 10
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                // For a typical UX: navigate to cart page
                navigate("/cart");
              }}
              style={{
                padding: "10px 14px",
                background: "#fff",
                color: "#111",
                border: "1px solid #ddd",
                borderRadius: 6,
                cursor: "pointer"
              }}
            >
              Go to Cart
            </button>
          </div>

          <div style={{ marginTop: "auto", color: "#777", fontSize: 14 }}>
            <strong>Availability:</strong> In Stock
            <br />
            <strong>SKU:</strong> {`SKU-${product.id}`}
          </div>
        </div>
      </div>
    </div>
  );
}
