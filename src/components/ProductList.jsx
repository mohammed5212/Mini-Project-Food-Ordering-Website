import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

const handleBuyNow = (product) => {
  localStorage.setItem("buyNowItem", JSON.stringify([product]));
  navigate("/checkout-now");
};

  return (
    <>
<h1 className="text-warning">Dishes</h1>    
   <div className="productContainer">
        {!products || products.length === 0 ? (
          <p className="noProducts">No Products Available.</p>
        ) : (
          products.map((product) => (
            <div className="productItem" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <p className="productName">{product.name}</p>
<p className="productPrice">₹{Number(product.price).toFixed(2)}</p>              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
