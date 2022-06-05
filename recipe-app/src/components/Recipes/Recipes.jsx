import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecipes } from '../../actions/index';


export default function Recipes() {
    const [recipe, setRecipe] = useState();
    const recipeList = useSelector(state => state.recipeList);
    const dispatch = useDispatch();

    function clearRecipeHelper(event) {
        event.preventDefault();
        dispatch(clearRecipes());
        setRecipe([]);
    }

    return (
        <div className="recipes">
            <h2>Your Recipes</h2>
            <div id="recipe-container">
            <div id="recipes">
                {/*div's with className="recipe" here*/}
                {recipeList.map((recipe) => (
                    <div className="recipe">
                        <h3>Title:</h3>
                        <p>{recipe.title}</p><br/>
                        <h3>Ingredients:</h3>
                        <p>{recipe.ingredients}</p><br/>
                        <h3>Instructions:</h3>
                        <p>{recipe.instructions}</p><br/>
                    </div>
                ))}
            </div>
            <button id="delete-recipes" onClick = {(event) => clearRecipeHelper(event)}>Delete Recipes</button>
        </div>
        </div>
    );
}