const Recipe = require('./recipe');

function generateRecipeData() {
    const pizza = new Recipe({
        title: "Pizza",
        ingredients: "Dough, sauce, cheese",
        instructions: "roll dough, add toppings, bake at 400 degrees F",
        time: 30,
        selected: false
    });

    // save recipes to database
    pizza.save();
}

module.exports = generateRecipeData;