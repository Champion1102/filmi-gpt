// store/trailerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const trailerSlice = createSlice({
    name: 'trailer',
    initialState: { trailerId: null, title: null, releaseDate: null,language: null },
    reducers: {
        setTrailerId: (state, action) => {
            const { trailerId, title, releaseDate,language } = action.payload; 
            state.trailerId = trailerId;
            state.title = title; // Set title
            state.releaseDate = releaseDate; 
            state.language = language;
        },
        clearTrailerId: (state) => {
            state.trailerId = null;
            state.title = null;
            state.releaseDate = null;
            state.language = null;
        }
    }
});

export const { setTrailerId, clearTrailerId } = trailerSlice.actions;
export default trailerSlice.reducer;
