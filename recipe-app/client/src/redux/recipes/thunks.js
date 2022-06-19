import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
    actionTypes.GET_RECIPES,
    async () => {
        return await RecipeService.getRecipes();
    }
);

export const addRecipeAsync = createAsyncThunk(
    actionTypes.ADD_RECIPE,
    async (recipe) => {
        return await RecipeService.addRecipe({ recipe });
    }
);

export const deleteRecipeAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPE,
    async ( recipeID ) => {
        return await RecipeService.deleteRecipe( recipeID );
    }
)

export const clearRecipesAsync = createAsyncThunk(
    actionTypes.CLEAR_RECIPES,
    async () => {
        return await RecipeService.clearRecipes();
    }
)

export const selectRecipeAsync = createAsyncThunk(
    actionTypes.SELECT_RECIPE,
    async (recipe) => {
        return await RecipeService.selectRecipe( {recipe} );
    }
)

export const editRecipeAsync = createAsyncThunk(
    actionTypes.EDIT_RECIPE,
    async (recipe) => {
        return await RecipeService.editRecipe(recipe);
    }
)