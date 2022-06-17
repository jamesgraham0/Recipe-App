const addRecipe = async (recipe) => {
    const response = await fetch('http://localhost:3000/recipes', {
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
    const response = await fetch('http://localhost:3000/recipes', {
        method: 'GET'
    });
    return response.json();
};

const deleteRecipe = async (recipeID) => {
    const response = await fetch('http://localhost:3000/recipes/' + recipeID.toString(), {
        method: 'DELETE'
    })
    .catch(error => {
        console.log(error);
    });
    return response.json();
}

export default {
    addRecipe,
    getRecipes,
    deleteRecipe
};