import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// भविष्य में हम यहाँ 'slices' जोड़ेंगे

const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});

export default store;