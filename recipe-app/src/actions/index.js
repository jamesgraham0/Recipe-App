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

export const deleteRecips = recipeId => {
    return {
        type: 'DELETE_RECIPE',
        payload: recipeId
    }
};