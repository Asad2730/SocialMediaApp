import { createSlice } from '@reduxjs/toolkit';
import { loginRequested, signupRequested } from './apiRequest';

const initialState = {
    isLogin: false,
    isError: null,
    userAuth: {
        email: '',
        password: '',
        name: '',
        imageUrl: '',
    },
};



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupRequested.fulfilled, (state, action) => {
                const response = action.payload;
                state.isLogin = true;
                // // Create a new userAuth object
                // state.userAuth = {  
                //     email: response.email,
                //     name: response.name,
                //     password: response.password,
                //     imageUrl: response.imageUrl,
                // };
                state.userAuth.email = response.email;
                state.userAuth.name = response.name;
                state.userAuth.password = response.password;
                state.userAuth.imageUrl = response.imageUrl;
            })
            .addCase(signupRequested.rejected, (state, action) => state.isError = action.error.message)
            .addCase(loginRequested.fulfilled,(state,action) => {
                const response = action.payload;
                state.isLogin = true;
                //do additional actions here
            })
            .addCase(loginRequested.rejected,(state,action)=>state.isError = action.error.message)
            .addDefaultCase((state, action) => { });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
