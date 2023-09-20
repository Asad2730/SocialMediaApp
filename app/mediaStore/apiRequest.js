import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

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
           console.log('imageUrl',imageUrl)
            let data = new FormData()
            data.append('name', name)
            data.append('email', email)
            data.append('password', password)
            data.append('image', imageUrl)
           
            let response = await axios.post('http://192.168.0.132:8080/signup', data, config)

            return response.data
        } catch (ex) {
            return thunkAPI.rejectWithValue(ex.message);
        }
    }
);