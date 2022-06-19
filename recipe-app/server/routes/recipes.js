var express = require('express');
var router = express.Router();

const recipes = [
  {
    id: 0,
    selected: false,
    title: 'Pizza',
    ingredients: 'Dough, Sauce, Cheese',
    instructions: 'Add toppings to dough and bake at 400F until cooked',
    time: '20'
  }
];

/* GET request */
router.get('/', function(req, res, next) {
  return res.send(recipes);
});

/* POST request */
router.post('/', function(req, res, next) {
  const recipe = { 
    id: recipes.length, 
    selected: false,
    title: req.body.recipe.title,
    ingredients: req.body.recipe.ingredients,
    instructions: req.body.recipe.instructions,
    time: req.body.recipe.time 
  };
  recipes.push(recipe);
  return res.send(recipe);
});

/* DELETE request */
router.delete('/:recipeID', function(req, res, next) {
  recipes.splice(req.params.recipeID, 1);
  let id = 0;
  recipes.map((recipe) => {
    recipe.id = id;
    id++;
  })
  return res.send(recipes);
});

/* PATCH request */
router.patch('/select/:recipeID', function(req, res, next) {
  recipes.map((recipe) => {
    if (req.params.recipeID == recipe.id) {
      recipe.selected = true;
    }
    else {
      recipe.selected = false;
    }
  })
  console.log(recipes);
  return res.send(recipes);
});

/* PATCH request */
router.patch('/edit/:recipeID', function(req, res, next) {
  recipes.map((recipe) => {
    if (req.params.recipeID == recipe.id) {
      recipe.time = req.body.time;
      recipe.title = req.body.title;
      recipe.ingredients = req.body.ingredients;
      recipe.instructions = req.body.instructions;
    }
  });
  return res.send(recipes);
});

module.exports = router;
