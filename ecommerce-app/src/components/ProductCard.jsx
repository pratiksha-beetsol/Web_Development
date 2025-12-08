import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 10,
      padding: 15,
      textAlign: "center"
    }}>
      <img 
        src={item.image} 
        alt={item.title} 
        style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} 
      />
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
      <Link 
        to={`/product/${item.id}`} 
        style={{
          background: "#333",
          color: "#fff",
          padding: "8px 15px",
          display: "inline-block",
          borderRadius: 5
        }}
      >
        View Details
      </Link>
    </div>
  );
}
