import { useState, useEffect } from "react";






const AdminDashboard = () => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.price) {
      alert("Name and Price are required.");
      return;
    }

    const updatedProducts = [
      ...products,
      { id: Date.now(), ...newProduct },
    ];

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setNewProduct({ name: "", price: "", image: "", category: "" });
    alert("✅ Product added successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📦 Admin Dashboard - Add Product</h2>

      <form onSubmit={handleAddProduct} className="card p-4 shadow">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category (e.g. South Indian, Dessert)"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          ➕ Add Product
        </button>
      </form>

      <hr className="my-4" />

      <h4>🗂️ Current Products:</h4>
      <ul className="list-group">
        {products.map((prod) => (
          <li key={prod.id} className="list-group-item d-flex justify-content-between">
            <span>{prod.name}</span>
            <span>₹{prod.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;