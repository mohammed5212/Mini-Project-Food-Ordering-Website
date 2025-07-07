
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";


const Checkout = ({ cartItems = [], isBuyNow = false }) => {
  const [items, setItems] = useState([]);
  const reduxCartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isBuyNow) {
      const buyNowItems = JSON.parse(localStorage.getItem("buyNowItem"));
      if (buyNowItems && Array.isArray(buyNowItems)) {
        setItems(buyNowItems);
        localStorage.removeItem("buyNowItem");
      }
    } else {
      setItems(cartItems.length > 0 ? cartItems : reduxCartItems);
    }
  }, [isBuyNow, cartItems, reduxCartItems]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleBuy = (item) => {
    alert(`🎉 Purchased ${item.name} for ₹${item.price}`);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    dispatch(removeFromCart(item.id));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/chk-bg.avif')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 container mx-auto p-6 text-white">
        <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Checkout Page</h2>
        <p className="mb-4">Thank you for your order!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white text-black rounded shadow-lg p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-700 mb-2">Price: ₹{item.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  🗑 Remove
                </button>
                <button
                  onClick={() => handleBuy(item)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  ✅ Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</h4>
      </div>
     <HomeButton />
    </div>
  );
};

export default Checkout;