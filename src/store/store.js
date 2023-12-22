import { configureStore } from "@reduxjs/toolkit";
import { musicApi, loginApi } from './services/music';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(musicApi.middleware)
      .concat(loginApi.middleware),
});

setupListeners(store.dispatch);

export default store;
