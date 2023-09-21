import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        // auth: authReducer
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable the serializable check
      warningThreshold: 100, // Increase the threshold value
    }),
})

export const persistor = persistStore(store)

