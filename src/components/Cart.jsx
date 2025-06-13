import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
    const navigate = useNavigate()
        const handleCheckout =()=>{
            navigate('/checkout')
        }
    
  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          {/* <Link to="/checkout"> */}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          {/* </Link> */}
        </>
      )}
    </div>
  );
};
export default Cart;
