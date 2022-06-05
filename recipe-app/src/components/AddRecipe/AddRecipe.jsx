import '../../styles.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from '../../actions/index.js';


export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();

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
                    <button id="add" onClick = {() => dispatch(addRecipe({
                        title:"Pasta",
                        ingredients:"Spaghetti, sauce, grated parmesan",
                        instructions:"boil water, place spaghetti in water for 8 mins, add sauce and parmesan"
                    }))}>Add Recipe</button>
                    <button id="clear" onClick = {(event) => clearRecipe(event)}>Clear</button>
                </form>
            </div>
        </div>
    );
}