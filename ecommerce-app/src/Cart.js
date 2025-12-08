function Cart({ cart, setCart }) {

  const updateQty = (id, type) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : item.qty - 1
            }
          : item
      )
      .filter((item) => item.qty > 0); // if qty=0 remove item

    setCart(updatedCart);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ padding: 10, borderBottom: "1px solid gray" }}>
          <h3>{item.name}</h3>
          <p>Price: ₹ {item.price}</p>
          <p>Qty: {item.qty}</p>

          <button onClick={() => updateQty(item.id, "inc")}>+</button>
          <button onClick={() => updateQty(item.id, "dec")}>-</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
