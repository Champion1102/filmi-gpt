import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'
import trailerReducer from './trailerSlice'
import watchlistReducer from './watchlistSlice'

const appStore = configureStore(
    {
        reducer: {
            user : userReducer,
            movies: moviesReducer,
            gpt:gptReducer,
            config: configReducer,
            trailer: trailerReducer,
            watchlist:watchlistReducer
        }
    }
)


export default appStore;