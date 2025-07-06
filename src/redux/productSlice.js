import { createSlice } from "@reduxjs/toolkit";
import defaultProducts from '../data/Products.json';

const storedProducts = JSON.parse(localStorage.getItem('products'));
const initialState = storedProducts || defaultProducts;

// const initial= JSON.parse(localStorage.getItem('products')) || [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.push(newProduct);
      localStorage.setItem('products', JSON.stringify(state));
    }
  
  }
}); 
export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer