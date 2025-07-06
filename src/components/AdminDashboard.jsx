
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, deleteProduct } from '../redux/productSlice';

// import { useState } from 'react';

// const AdminDashboard = () => {
//   const products = useSelector(state => state.products);
//   const dispatch = useDispatch();

//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     category: '',
//   });

//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     if (!newProduct.name || !newProduct.price) {
//       alert('Name and price required');
//       return;
//     }

//     const id = Date.now();
//     const productToAdd = { id, ...newProduct };

//     dispatch(addProduct(productToAdd));
//     setNewProduct({ name: '', price: '', image: '', category: '' });
//     alert('✅ Product added!');
//   };

//   const handleDeleteProduct = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   return (
//     <div className="container mt-5">
//       <h2>📦 Admin Dashboard - Add Product</h2>

//       <form onSubmit={handleAddProduct} className="card p-4 shadow">
//         <input className="form-control mb-2" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
//         <input className="form-control mb-2" name="price" placeholder="Price" type="number" value={newProduct.price} onChange={handleChange} />
//         <input className="form-control mb-2" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
//         <input className="form-control mb-2" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
//         <button type="submit" className="btn btn-success w-100">➕ Add Product</button>
//       </form>

//       <h4 className="mt-4">🗂️ Current Products:</h4>
//       <ul className="list-group">
//         {products?.map(prod => (
//           <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
//             <div>
              
//               <strong>{prod.name}</strong> - ₹{prod.price}<br />
//               <small>{prod.category}</small>
//             </div>
//             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(prod.id)}>🗑</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/productSlice';
import { logout } from '../redux/authSlice'; // ✅ add this import
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ add this impor
const AdminDashboard = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ initialize navigate

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
  });

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('auth'); // optional: if you're storing login info
    navigate('/login');
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert('Name and price required');
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

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📦 Admin Dashboard - Add Product</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          🔒 Logout
        </button>
      </div>

      <form onSubmit={handleAddProduct} className="card p-4 shadow">
        <input className="form-control mb-2" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input className="form-control mb-2" name="price" placeholder="Price" type="number" value={newProduct.price} onChange={handleChange} />
        <input className="form-control mb-2" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
        <input className="form-control mb-2" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <button type="submit" className="btn btn-success w-100">➕ Add Product</button>
      </form>

      <h4 className="mt-4">🗂️ Current Products:</h4>
      <ul className="list-group">
        {products?.map(prod => (
          <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{prod.name}</strong> - ₹{prod.price}<br />
              <small>{prod.category}</small>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(prod.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;