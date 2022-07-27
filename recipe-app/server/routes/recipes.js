var express = require('express');
var router = express.Router();
const queries = require('../models/queries');
const Recipe = require('../models/recipe');
const { v4: uuidv4 } = require('uuid');

/* GET request */
router.get('/', async function(req, res, next) {
  try {
    const recipes = await queries.getAllRecipes();
    return res.send(recipes);
  } catch (error) {
    console.error(error);
  }
});

/* POST request */
router.post('/', function(req, res, next) {
  const recipe = { 
    _id: uuidv4(),
    selected: false,
    title: req.body.recipe.title,
    ingredients: req.body.recipe.ingredients,
    instructions: req.body.recipe.instructions,
    time: req.body.recipe.time 
  };
  try {
      Recipe.create(recipe);
      return res.send(recipe);
  } catch (err) {
    console.error(err);
  }
});

/* DELETE request */
router.delete('/:recipe_id', async function(req, res, next) {
  await queries.deleteOneRecipe(req.params.recipe_id);
  return res.send();
});

/* PATCH request */
router.patch('/select/:recipeID', function(req, res, next) {
  // recipes.map((recipe) => {
  //   if (req.params.recipeID == recipe.id) {
  //     recipe.selected = true;
  //   }
  //   else {
  //     recipe.selected = false;
  //   }
  // })
  // return res.send(recipes);
});

/* PATCH request */
router.patch('/edit/:recipeID', function(req, res, next) {
  // recipes.map((recipe) => {
  //   if (req.params.recipeID == recipe.id) {
  //     recipe.time = req.body.time;
  //     recipe.title = req.body.title;
  //     recipe.ingredients = req.body.ingredients;
  //     recipe.instructions = req.body.instructions;
  //   }
  // });
  // return res.send(recipes);
});

module.exports = router;
