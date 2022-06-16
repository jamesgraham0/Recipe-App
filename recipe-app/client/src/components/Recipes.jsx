import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecipes, deleteRecipe, selectRecipe } from '../actions/index';
import DetailView from './DetailView';


export default function Recipes() {
    const [recipe, setRecipe] = useState();
    const recipeList = useSelector(state => state.recipeList);
    const dispatch = useDispatch();

    function clearRecipeHelper(event) {
        event.preventDefault();
        dispatch(clearRecipes());
        setRecipe([]);
    }

    function deleteHelper(event, id) {
        event.preventDefault();
        dispatch(deleteRecipe(id));
        setRecipe({});
    }

    function selectHelper(event, recipe) {
        event.preventDefault();
        dispatch(selectRecipe(recipe));
        setRecipe(recipe);
    }

    return (
        <div className="recipes">
            <h2>Your Recipes</h2>
            <div id="recipe-container">
            <div className="recipes">
                {recipeList.map((recipe) => (
                        <div key={recipe.id.toString()} className="recipe">
                            <button id="recipe-button-select" onClick = {(event) => selectHelper(event, recipe)}>Select</button>
                            <button id="recipe-button-x" onClick={(event) => deleteHelper(event, recipe.id)}>X</button>                                            
                            <p id="p-time">{recipe.time}</p><br/>
                            <h3>Title:</h3>
                            <p>{recipe.title}</p><br/>
                            <h3>Ingredients:</h3>
                            <p>{recipe.ingredients}</p><br/>
                        </div>
                ))}
            </div>
            <button id="delete-recipes" onClick = {(event) => clearRecipeHelper(event)}>Delete Recipes</button>
            </div>
            <DetailView/>
        </div>
    );
}