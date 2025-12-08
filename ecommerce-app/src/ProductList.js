function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid black",
            padding: 10,
            marginBottom: 10
          }}
        >
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
