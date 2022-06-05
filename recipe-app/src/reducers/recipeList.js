const recipes = [{
    id: 0,
    title: "Pizza",
    ingredients: "dough, marinara sauce, cheese",
    instructions: "place toppings on dough and bake for 20 mins at 350 degrees Farenheit"
}];

const recipeList = (state=recipes, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            state.push(action.payload);
            return state;
        case 'CLEAR_RECIPES':
            return [];
        case 'DELETE_RECIPE':
            return state.splice(action.payload, 1);
        default:
            return state;
    }
};

export default recipeList;