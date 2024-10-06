import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      const exists = state.some((item) => item.imdbID === movie.imdbID);
      if (!exists) {
        state.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload);
    }
  }
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
