import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/reducer';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer
    },
    devTools: true
});