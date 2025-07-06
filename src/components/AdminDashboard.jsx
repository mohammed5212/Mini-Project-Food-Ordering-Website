// import { useState, useEffect } from "react";






// const AdminDashboard = () => {
//   const [products, setProducts] = useState(() => {
//     const stored = localStorage.getItem("products");
//     return stored ? JSON.parse(stored) : [];
//   });

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     image: "",
//     category: "",
//   });

//   const handleChange = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     if (!newProduct.name || !newProduct.price) {
//       alert("Name and Price are required.");
//       return;
//     }

//     const updatedProducts = [
//       ...products,
//       { id: Date.now(), ...newProduct },
//     ];

//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));

//     setNewProduct({ name: "", price: "", image: "", category: "" });
//     alert("✅ Product added successfully!");
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">📦 Admin Dashboard - Add Product</h2>

//       <form onSubmit={handleAddProduct} className="card p-4 shadow">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Product Name"
//             name="name"
//             value={newProduct.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="number"
//             className="form-control"
//             placeholder="Price"
//             name="price"
//             value={newProduct.price}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Image URL"
//             name="image"
//             value={newProduct.image}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Category (e.g. South Indian, Dessert)"
//             name="category"
//             value={newProduct.category}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-success w-100">
//           ➕ Add Product
//         </button>
//       </form>

//       <hr className="my-4" />

//       <h4>🗂️ Current Products:</h4>
//       <ul className="list-group">
//        {products.map((prod) => (
//   <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
//     <div>
//       <strong>{prod.name}</strong> - ₹{prod.price}
//       <br />
//       <small>{prod.category}</small>
//     </div>
//     <button 
//       className="btn btn-danger btn-sm"
//       onClick={() => handleDeleteProduct(prod.id)}
//     >
//       🗑 Delete
//     </button>
//   </li>
// ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/productSlice';
import { useState } from 'react';

const AdminDashboard = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

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
      <h2>📦 Admin Dashboard - Add Product</h2>

      <form onSubmit={handleAddProduct} className="card p-4 shadow">
        <input className="form-control mb-2" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input className="form-control mb-2" name="price" placeholder="Price" type="number" value={newProduct.price} onChange={handleChange} />
        <input className="form-control mb-2" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
        <input className="form-control mb-2" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <button type="submit" className="btn btn-success w-100">➕ Add Product</button>
      </form>

      <h4 className="mt-4">🗂️ Current Products:</h4>
      <ul className="list-group">
        {products.map(prod => (
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