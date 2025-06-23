import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleBuyNow = (item) => {
    localStorage.setItem("buyNowItem", JSON.stringify([item]));
    navigate("/checkout");
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700 mb-3">₹{item.price}</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleBuyNow(item)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <h4 className="text-xl font-bold">Total: ₹{total}</h4>
            <div className="flex gap-4">
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;