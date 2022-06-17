import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addRecipe } from '../actions/index.js';
import Recipes from './Recipes';
import { addRecipeAsync } from '../redux/recipes/thunks';


export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [time, setTime] = useState("");
    const [recipe, setRecipe] = useState("");

    const recipes = useSelector(state => state.recipes.list);
    const dispatch = useDispatch();

    function addHelper(event) {
        event.preventDefault();
        let recipe = {
            id: recipes.length,
            selected: false,
            title: title,
            ingredients: ingredients,
            instructions: instructions,
            time: time
        };
        dispatch(addRecipeAsync(recipe));
        setRecipe(recipe);
    }

    function clearRecipe(event) {
        event.preventDefault();
        setTitle("");
        setIngredients("");
        setInstructions("");
        setTime("");
    }

    function timeHelper(event) {
        if (!isNaN(event.target.value)) {
            setTime(event.target.value);
        }
        else {
            setTime(0);
        }
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
                    <label>
                        Time:
                        <input
                            id="time"
                            type="text"
                            value={time}
                            onChange={(e) => timeHelper(e)}
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