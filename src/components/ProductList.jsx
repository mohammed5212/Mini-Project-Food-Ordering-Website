import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../style/App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ products, onAddToCart }) => {
  const navigate = useNavigate();
// const ProductList = ({ onAddToCart }) => {
//   const products = useSelector(state => state.products);
//   const navigate = useNavigate();


  const handleBuyNow = (product) => {
    onAddToCart(product);
    navigate("/checkout");
  };

  return (
    <>
      <h1>Products</h1>
      <div className="productContainer">
        {products.length === 0 ? (
          <p className="noProducts">No Products Available.</p>
        ) : (
          products?.map((product) => (
            <div className="productItem" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <p className="productName">{product.name}</p>
              <p className="productPrice">₹{product.price.toFixed(2)}</p>
              <div>
                <button type="button" className="btn btn-outline-primary" onClick={() => onAddToCart(product)}>
                  Add to Cart
                </button>
                <button type="button" className="btn btn-outline-success" onClick={() => handleBuyNow(product)}>Buy Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default ProductList;
