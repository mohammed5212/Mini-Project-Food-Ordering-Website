import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList'
import Header from './components/Header';
import Cart from './components/Cart'
import products from './data/Products.json';
import Checkout from './components/Checkout';

const App = ()=> {
   const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const [cartItems, setCartItems]=useState([])

  const handleAddToCart = (product) => {
  setCartItems(prevItems => [...prevItems, product]);
};
 const filteredProducts = products.filter(product =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  


  return (
    <Router>
     <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onCategoryChange={setCategory}
      />
      <Routes>
        <Route path='/' element={<ProductList products={filteredProducts} onAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
       <Route path="/checkout" element={<Checkout  cartItems={cartItems} />} />
      </Routes>
                                   
     
    </Router>
  )
}

export default App
 