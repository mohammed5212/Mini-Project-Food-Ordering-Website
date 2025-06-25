import{createSlice} from'@reduxjs/toolkit';
const initialState = {
    userType:null,
    isAuthenticated: false,
}
const authSlice = createSlice({
    name :'auth',
    initialState,
    reducers: {
        login :(state, action)=>{
            state.userType =action.payload ;
            state.isAuthenticated =true ;
        },
        logout: (state) =>{
            state.userType = null;
            state.isAuthenticated = false;
        }
    }
})
export const { login ,logout} =authSlice.actions ;
export default authSlice.reducer ;