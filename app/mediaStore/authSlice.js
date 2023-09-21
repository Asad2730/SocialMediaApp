import { createSlice } from '@reduxjs/toolkit';
import { loginRequested, signupRequested, getUsersRequested } from './apiRequest';

const initialState = {
    isLogin: false,
    isError: null,
    loading: true,
    userAuth: {
        email: '',
        password: '',
        name: '',
        imageUrl: '',
    },
    users: [],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.loading = true;
            state.userAuth.email = '';
            state.userAuth.name = '';
            state.userAuth.password = '';
            state.userAuth.imageUrl = '';
            state.users = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupRequested.fulfilled, (state, action) => {
                state.isLogin = true;
                state.userAuth.email = action.payload.Email;
                state.userAuth.name = action.payload.Name;
                state.userAuth.password = action.payload.Password;
                state.userAuth.imageUrl = action.payload.ImageUrl;
            })
            .addCase(loginRequested.fulfilled, (state, action) => {
                state.isLogin = true;
                state.userAuth.email = action.payload.Email;
                state.userAuth.name = action.payload.Name;
                state.userAuth.password = action.payload.Password;
                state.userAuth.imageUrl = action.payload.ImageUrl;
            })
            .addCase(getUsersRequested.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addMatcher(
                (action) => [signupRequested, loginRequested, getUsersRequested].some(a => a.rejected.match(action)),
                  (state, action) => {
                    console.log('Error',action.error);     
                    state.isError = action.error.message;
                 }
            )
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
