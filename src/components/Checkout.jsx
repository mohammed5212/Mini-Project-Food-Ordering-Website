const Checkout = ({ cartItems }) => (
  <div>
    <h2>✅ Checkout Page</h2>
    <p>Thank you for your order!</p>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>{item.name} - ₹{item.price}</li>
      ))}
    </ul>
  </div>
);

export default Checkout;