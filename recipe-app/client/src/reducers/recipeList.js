const recipes = [{
    id: 0,
    selected: false,
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
            console.log('here');
            state.splice(action.payload, 1)
            let id = 0;
            state.map((recipe) => {
                recipe.id = id;
                id++;
            });
            return state;
        case 'SELECT_RECIPE':
            state.map((recipe) => {
                if (recipe.selected === true) {
                    recipe.selected = false;
                }
            });
            action.payload.selected = true;
            return state;
        default:
            return state;
    }
};

export default recipeList;