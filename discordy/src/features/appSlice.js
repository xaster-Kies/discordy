import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {

      state.user += action.payload;
    },
},
});

export const { setChannelId } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
