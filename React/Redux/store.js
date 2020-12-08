import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loaderSlice from './loader/loaderSlice';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
