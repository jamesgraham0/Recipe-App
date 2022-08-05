const addRecipe = async (recipe) => {
    const response = await fetch('https://recipes-app-james-graham.herokuapp.com/recipes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
}); 
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }
    return data;
};

const getRecipes = async () => {
    const response = await fetch('https://recipes-app-james-graham.herokuapp.com/recipes', {
        method: 'GET'
    });
    return response.json();
};

const deleteRecipe = async (recipe) => {
    const response = await fetch('https://recipes-app-james-graham.herokuapp.com/recipes/' + recipe.recipe._id, {
        method: 'DELETE'
    })
    if (!response.ok) {
        console.error('Response not ok for delete');
    }
    return recipe.recipe._id;
}

const selectRecipe = async (recipe) => {
    let recipeID = recipe.recipe.id;
    const response = await fetch('https://recipes-app-james-graham.herokuapp.com/recipes/select/' + recipeID.toString(), {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe.recipe)
    })
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }
    return data;
}

const editRecipe = async (recipe) => {
    let recipeID = recipe.id;
    const response = await fetch('https://recipes-app-james-graham.herokuapp.com/recipes/edit/' + recipeID.toString(), {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }
    return data;
}

export default {
    addRecipe,
    getRecipes,
    deleteRecipe,
    selectRecipe,
    editRecipe
};