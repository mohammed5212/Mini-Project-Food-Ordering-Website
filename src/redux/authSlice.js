
import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('auth')) || {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userType = action.payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.setItem('auth', JSON.stringify(state));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;