import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold mb-2">{item.name}</h5>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;