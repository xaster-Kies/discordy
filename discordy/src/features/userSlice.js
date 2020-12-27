import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {

      state.user += action.payload;
    },
    logout: (state) => {

      state.user = null;
    }
    },
});

export const { logout, login } = userSlice.actions;

export const selectCount = state => state.user.value;

export default userSlice.reducer;
