import { useEffect, useState } from "react";

const Checkout = ({ cartItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const singleItem = JSON.parse(localStorage.getItem("buyNowItem"));
    if (singleItem) {
      setItems(singleItem);
      localStorage.removeItem("buyNowItem");
    } else {
      setItems(cartItems);
    }
  }, [cartItems]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Checkout Page</h2>
      <p className="mb-2">Thank you for your order!</p>
      <ul className="list-disc pl-5 mb-4">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>
      <h4 className="text-lg font-semibold">Total: ₹{total}</h4>
    </div>
  );
};

export default Checkout;