import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CreateUser } from '../apiRequest/requests';

const initialState = {
    isLogin: false,
    userAuth: {
        email: '',
        password: '',
        name: '',
        imageUrl: '',
    },
};

export const signupRequested = createAsyncThunk(
    'auth/signupRequested',
    async ({ email, password, name, imageUrl }, thunkAPI) => {
        try {
            const response = await CreateUser(email, password, name, imageUrl);
            return response;
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
        },
        logout: (state, action) => {
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupRequested.fulfilled, (state, action) => {
                const response = action.payload;
                state.isLogin = true;
                state.userAuth.email = response.email;
                state.userAuth.name = response.name;
                state.userAuth.password = response.password;
                state.userAuth.imageUrl = response.imageUrl;
            })
            .addCase(signupRequested.rejected, (state, action) => {
                const errorMessage = action.error.message;
                console.error('Error:', errorMessage);
            })
            .addDefaultCase((state, action) => { });
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
