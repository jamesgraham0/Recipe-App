const recipes = [{
    title:"Pizza",
    ingredients:"dough, marinara sauce, cheese",
    instructions:"put sauce and cheese on dough and bake for 15 mins at 350 Farenheit"
}]

const recipeList = (state=recipes, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            recipes.push(action.payload);
            return recipes;
        default:
            return recipes;
    }
};

export default recipeList;