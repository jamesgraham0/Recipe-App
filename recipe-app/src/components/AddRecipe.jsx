import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from '../actions/index.js';
import Recipes from './Recipes';


export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [recipe, setRecipe] = useState();

    const recipeList = useSelector(state => state.recipeList);
    const dispatch = useDispatch();

    function addHelper(event) {
        event.preventDefault();
        let recipe = {
            id: recipeList.length,
            selected: false,
            title: title,
            ingredients: ingredients,
            instructions: instructions
        };
        dispatch(addRecipe(recipe));
        setRecipe(recipe);
    }

    function clearRecipe(event) {
        event.preventDefault();
        setTitle("");
        setIngredients("");
        setInstructions("");
    }

    return (
        <div className="addRecipe">
            <h2>Add Recipe</h2>
            <div id="form">
                <form>
                    <label>
                        Recipe Title:
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label>
                        Ingredients:
                        <input
                            id="ingredients"
                            type="text"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                    </label>
                    <label>
                        Instructions:
                        <input
                            id="instructions"
                            type="text"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                        />
                    </label>
                    <button id="add" onClick = {(event) => addHelper(event)}>Add Recipe</button>
                    <button id="clear" onClick = {(event) => clearRecipe(event)}>Clear</button>
                </form>
            </div>
            <Recipes/>
        </div>
    );
}