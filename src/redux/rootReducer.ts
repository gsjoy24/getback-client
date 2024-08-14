import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './api/authSlice';
import { baseApi } from './api/baseApi';
const persistConfig = {
	key: 'auth',
	storage
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
	[baseApi.reducerPath]: baseApi.reducer,
	auth: persistedAuthReducer
};
