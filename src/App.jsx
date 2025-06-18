import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import Login from './components/Login'
import UserDashboard from './components/UserDashboard';
import AdminDashboard  from './components/AdminDashboard'; 
import ProductList from './components/ProductList'
import Header from './components/Header';
import Cart from './components/Cart'
import products from './data/Products.json';
import Checkout from './components/Checkout';
import ProtectedRoute from './components/ProtectedRoute';

const App = ()=> {
  const location = useLocation();
const isLoginPage = location.pathname === '/';
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
   <>
  
      {!isLoginPage && (
     <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onCategoryChange={setCategory}
      />)}

    
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/products' element={<ProductList products={filteredProducts} onAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
       <Route path="/checkout" element={<Checkout  cartItems={cartItems} />} />
      
     
      <Route path='/admin' element ={
        <ProtectedRoute allowedRoles={['admin']}>
     <AdminDashboard/>
     </ProtectedRoute>}/>

     <Route path='/user' element ={
      <ProtectedRoute allowedRoles={['user']}>
      <UserDashboard/>
      </ProtectedRoute>
     }/>

      </Routes>
                                   
     

     </>
  )
}

export default App
 