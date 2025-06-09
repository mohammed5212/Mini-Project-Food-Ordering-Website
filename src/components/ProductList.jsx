import "../style/App.css";
import products from "../Products.json";

const ProductList = ({products}) => {
  return (
    <>

      <h1>Products</h1>
      <div className="productContainer">
        {products.length===0 ?(
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
              
              <div className="buttonContainer">
                <button className="buyBtn" onClick= {()=>handleBuy(product)}>Buy</button>
                  <button className="cartBtn" onClick={()=>onAddToCart(product)}>Add To Cart</button>

              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default ProductList;
