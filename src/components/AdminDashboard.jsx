
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, deleteProduct } from '../redux/productSlice';
// import { logout } from '../redux/authSlice'; // ✅ add this import
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅ add this impor
// const AdminDashboard = () => {
//   const products = useSelector(state => state.products);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // ✅ initialize navigate

//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     category: '',
//   });

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('auth'); // optional: if you're storing login info
//     navigate('/login');
//   };

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
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>📦 Admin Dashboard - Add Product</h2>
//         <button className="btn btn-outline-danger" onClick={handleLogout}>
//           🔒 Logout
//         </button>
//       </div>

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




// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, deleteProduct, updateProduct } from '../redux/productSlice';
// import { logout } from '../redux/authSlice';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     category: '',
//   });

//   const [editingId, setEditingId] = useState(null);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('auth');
//     navigate('/login');
//   };

//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleAddOrUpdateProduct = (e) => {
//     e.preventDefault();

//     if (!newProduct.name || !newProduct.price) {
//       alert('Name and price required');
//       return;
//     }

//     if (editingId) {
//       dispatch(updateProduct({ id: editingId, ...newProduct }));
//       setEditingId(null);
//     } else {
//       const id = Date.now();
//       dispatch(addProduct({ id, ...newProduct }));
//     }

//     setNewProduct({ name: '', price: '', image: '', category: '' });
//   };

//   const handleEdit = (product) => {
//     setNewProduct({
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       category: product.category,
//     });
//     setEditingId(product.id);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       dispatch(deleteProduct(id));
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>📦 Admin Dashboard</h2>
//         <button className="btn btn-outline-danger" onClick={handleLogout}>
//           🔒 Logout
//         </button>
//       </div>

//       <form onSubmit={handleAddOrUpdateProduct} className="card p-4 shadow mb-4">
//         <input className="form-control mb-2" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
//         <input className="form-control mb-2" name="price" placeholder="Price" type="number" value={newProduct.price} onChange={handleChange} />
//         <input className="form-control mb-2" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
//         <input className="form-control mb-2" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
//         <button type="submit" className="btn btn-success w-100">
//           {editingId ? '✏️ Update Product' : '➕ Add Product'}
//         </button>
//       </form>

//       <h4 className="mb-3">🗂️ Total Products: {products.length}</h4>
//       <div className="row">
//         {products.map((prod) => (
//           <div key={prod.id} className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img
//                 src={prod.image}
//                 alt={prod.name}
//                 className="card-img-top"
//                 style={{ height: '180px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{prod.name}</h5>
//                 <p className="card-text">₹{prod.price}</p>
//                 <small className="text-muted">{prod.category}</small>
//               </div>
//               <div className="card-footer d-flex justify-content-between">
//                 <button className="btn btn-sm btn-primary" onClick={() => handleEdit(prod)}>✏️ Edit</button>
//                 <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod.id)}>🗑 Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



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
    navigate('/login');
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

