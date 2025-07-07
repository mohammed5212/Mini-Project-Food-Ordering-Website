import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import HomeButton from './HomeButton';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleBuyNow = (item) => {
    localStorage.setItem("buyNowItem", JSON.stringify([item]));
    navigate("/checkout");
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg.avif')" }}
       >
   
      {/* Cart content */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-200">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white text-black shadow-lg rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
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

            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
              <h4 className="text-xl font-bold">Total: ₹{total.toFixed(2)}</h4>
              <div className="flex gap-4">
                <button
                  onClick={handleClearCart}
                  className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Proceed to Checkout
                </button>
                
              </div>
            </div>
          </>
        )}
      </div>
      <HomeButton />
    </div>
  );
};

export default Cart;