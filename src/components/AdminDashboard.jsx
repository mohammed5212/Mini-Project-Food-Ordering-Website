

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, editProduct } from '../redux/productSlice';
import { logout } from '../redux/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editId, setEditId] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill all fields');
      return;
    }

    const id = Date.now();
    const productToAdd = { id, ...newProduct };

    dispatch(addProduct(productToAdd));
    setNewProduct({ name: '', price: '', image: '', category: '' });
    alert('✅ Product added!');
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('auth');
   navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📦 Admin Dashboard</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>🔒 Logout</button>
      </div>

      <form onSubmit={handleAddProduct} className="card p-4 shadow mb-4">
        <h5>Add New Product</h5>
        <input className="form-control mb-2" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input className="form-control mb-2" name="price" type="number" placeholder="Price" value={newProduct.price} onChange={handleChange} />
        <input className="form-control mb-2" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
        <input className="form-control mb-2" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <button type="submit" className="btn btn-success w-100">➕ Add Product</button>
      </form>

      <h4>🗂️ Product List ({products.length})</h4>
      <ul className="list-group">
        {products.map(prod => (
          <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <img src={prod.image} alt={prod.name} width={80} height={60} className="me-3 rounded shadow-sm" />
              <div>
                <strong>{prod.name}</strong> - ₹{prod.price} <br />
                <small>{prod.category}</small>
              </div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(prod.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

