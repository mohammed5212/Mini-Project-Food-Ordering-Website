// import { createSlice } from "@reduxjs/toolkit";
// import defaultProducts from '../data/Products.json';

// const storedProducts = JSON.parse(localStorage.getItem('products'));
// const initialState = storedProducts || defaultProducts;



// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       const newProduct = action.payload;
//       state.push(newProduct);
//       localStorage.setItem('products', JSON.stringify(state));
//     }
  
//   }
// }); 
// export const { addProduct, deleteProduct } = productSlice.actions;
// export default productSlice.reducer

import { createSlice } from '@reduxjs/toolkit';
import defaultProducts from '../data/Products.json';

const storedProducts = JSON.parse(localStorage.getItem('products'));
const initialState = storedProducts && storedProducts.length > 0 
  ? storedProducts 
  : defaultProducts;

  if (!storedProducts || storedProducts.length === 0) {
  localStorage.setItem('products', JSON.stringify(defaultProducts));
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.push(newProduct);
      localStorage.setItem('products', JSON.stringify(state));
    },
    deleteProduct: (state, action) => {
      const idToDelete = action.payload;
      const updated = state.filter(p => p.id !== idToDelete);
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state[index] = updatedProduct;
        localStorage.setItem('products', JSON.stringify(state));
      }
    }
  }
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;