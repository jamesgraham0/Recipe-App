const Recipe = require('./recipe');

const queries = {
    getAllRecipes: async function (filter) {
        const recipes = await Recipe.find(filter);
        return recipes;
    },
    getOneRecipe: async function (filter) {
        const recipe = await Recipe.findOne(filter);
        return recipe;
    },
    deleteOneRecipe: async function (id) {
        await Recipe.deleteOne({_id: id});
    }
}
module.exports = queries;