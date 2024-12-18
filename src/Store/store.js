import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './src/Slices/apiSlice';
import authReducer from './src/Slices/authSlice';
 feature_ES


 main
const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
 feature_ES
export default store;


export default store;
main
