import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../utils/constants';

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const loginRequested = createAsyncThunk(
    'auth/loginRequested',
    async ({ email, password }, thunkAPI) => {
        try {         
            let response = await axios.get(`${url}login/${email}/${password}`);      
            return response.data;
        } catch (ex) {       
            return thunkAPI.rejectWithValue(ex.response?.data || ex.message);
        }
    }
);

export const signupRequested = createAsyncThunk(
    'auth/signupRequested',
    async ({ email, password, name, imageUrl }, thunkAPI) => {
        try {
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('password', password);
            data.append('image', {
                uri: imageUrl,
                name: 'photo.jpg',
                type: 'image/jpg',
            });

            let response = await axios.post(`${url}signup/`, data, config);
            return response.data;
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.response?.data || ex.message);
        }
    }
);

export const getUsersRequested = createAsyncThunk(
    'auth/getUsersRequested',
    async (_, thunkAPI) => {
        try {
            let response = await axios.get(`${url}getAll/`);
            return response.data;
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.response?.data || ex.message);
        }
    }
);
