



import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import products from './data/Products.json';
import Checkout from './components/Checkout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const location = useLocation();

  // Hide header on login and all admin routes
  const hideHeader =
    location.pathname === '/login' || location.pathname.startsWith('/admin');


  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
 const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const filteredProducts = products.filter((product) =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {!hideHeader && (
        <Header
          searchText={searchText}
          setSearchText={setSearchText}
          onCategoryChange={setCategory}
          cartCount={cartItems.length}
        />
      )}

      <Routes>
       
        <Route path="/" element={<Navigate to="/products" replace />} />

      
        <Route path="/products" element={<ProductList />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/checkout-now" element={<Checkout isBuyNow={true} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    {/* {showHome && <HomeButton />}  */}
    </>
  );
};

export default App;