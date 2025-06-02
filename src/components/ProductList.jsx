import './style/App.css'

const ProductList = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="productContainer">
        <div className="productItem">
          <img
            src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="productImage"
          />
          <p className="productName">Product Name</p>
          <p className="productPrice">Price</p>
        </div>
      </div>
    </>
  );
};
export default ProductList;
