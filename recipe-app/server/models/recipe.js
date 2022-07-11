var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
        _id: String,
        title: String,
        ingredients: String,
        instructions: String,
        time: Number,
        selected: false
});

// Virtual for recipe's URL
// RecipeSchema.virtual('url').get(function() {
//     return '/recipes/recipe/' + this._id;
// });

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;