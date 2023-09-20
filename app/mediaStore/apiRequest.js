import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginRequested = createAsyncThunk(
    'auth/loginRequested',
    async ({ email, password }, thunkAPI) => {
        try {
            let response = await axios.post('Api_End_Point', { email, password })
            return response.data
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.message)
        }
    }
)


export const signupRequested = createAsyncThunk(
    'auth/signupRequested',
    async ({ email, password, name, imageUrl }, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            let data = new FormData()
            data.append('name', name)
            data.append('email', email)
            data.append('password', password)
            data.append('image', imageUrl)

            let response = await axios.post('http://localhost:8080/signUp/', data, config)
            return response.data
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.message);
        }
    }
);