
import { Link } from 'react-router-dom';
const Cart=({cartItems})=>{
    return(
        <div className="cart">
            <h2>🛒 Your Cart</h2>
            {
                cartItems.length===0 ?
                (<p>Cartis empty.</p>):
                (
                    <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item.name} - ₹{item.price}

                            </li>))}
                    </ul>
                     <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
                    </>
                    
                )}

        </div>
    )}
    export default Cart