export const addRecipe = recipe => {
    return {
        type: 'ADD_RECIPE',
        payload: recipe
    }
};

export const clearRecipes = () => {
    return {
        type: 'CLEAR_RECIPES'
    }
};

export const deleteRecipe = recipeId => {
    return {
        type: 'DELETE_RECIPE',
        payload: recipeId
    }
};

export const selectRecipe = recipe => {
    return {
        type: 'SELECT_RECIPE',
        payload: recipe
    }
};