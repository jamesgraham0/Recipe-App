import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function DetailView() {
    const [selectedRecipe, setRecipe] = useState({});
    const recipes = useSelector(state => state.recipes.list);

    useEffect(() => {
        if (recipes) {
            recipes.map((recipe) => {
                if (recipe.selected) {
                    setRecipe(recipe);
                }
            });
        }
    });

    return (
        <div id="detail-container">
            <div id="detail-view-background">
                <div id="detail-view">
                    <h3 id="selected-recipe">Selected Recipe</h3>
                        <div id="selected" className="recipe">
                            <p id="p-time-selected">{selectedRecipe.time}</p><br/>
                            <h3>Title:</h3>
                            <p>{selectedRecipe.title}</p><br/>
                            <h3>Ingredients:</h3>
                            <p>{selectedRecipe.ingredients}</p><br/>
                            <h3>Instructions:</h3>
                            <p>{selectedRecipe.instructions}</p><br/>
                        </div>
                </div>
            </div>
        </div>
    );
}