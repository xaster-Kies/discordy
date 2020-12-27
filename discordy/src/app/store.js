import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/counterSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
