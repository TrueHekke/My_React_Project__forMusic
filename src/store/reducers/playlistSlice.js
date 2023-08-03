import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    setFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToFavorites, setFavorites } = playlistSlice.actions;
export default playlistSlice.reducer;