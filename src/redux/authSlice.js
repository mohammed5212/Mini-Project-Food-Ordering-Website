// // import{createSlice} from'@reduxjs/toolkit';

// // const initialState = {
// //     userType:null,
// //     isAuthenticated: false,
// // }
// // const authSlice = createSlice({
// //     name :'auth',
// //     initialState,
// //     reducers: {
// //         login :(state, action)=>{
// //             state.userType =action.payload ;
// //             state.isAuthenticated =true ;
// //         },
// //         logout: (state) =>{
// //             state.userType = null;
// //             state.isAuthenticated = false;
// //         }
// //     }
// // })
// // export const { login ,logout} =authSlice.actions ;
// // export default authSlice.reducer ;
//    import{createSlice} from'@reduxjs/toolkit';


// const initial = JSON.parse(localStorage.getItem('auth')) || {
//   isAuthenticated: false,
//   user: null,
// };
// const authSlice = createSlice({
//     name : 'auth',
//     initialState: initial,
//     reducerce :(login :{state,action} =>{
//         console.log()
//     })
// })

// export const { login ,logout} =authSlice.actions ;
//  export default authSlice.reducer ;
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
      state.user = action.payload;
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