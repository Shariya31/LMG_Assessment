// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false;
const user = JSON.parse(localStorage.getItem("user")) || null;
console.log(isAuthenticated, user, "slice")

const initialState = {
  isAuthenticated,
  user,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log(action.payload)
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store user in localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
