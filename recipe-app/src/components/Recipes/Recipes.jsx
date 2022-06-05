
import { useState, useEffect } from 'react';

export default function Recipes() {
    const [recipes, setRecipe] = useState([]);

    
    useEffect(() => {
        console.log(recipes);
    }, [recipes]);

    return (
        <div className="recipes">
            <h2>Your Recipes</h2>
            <div id="recipe-container">
            <div id="recipes">
                {/*div's with className="recipe" here*/}
                {recipes.map((recipe) => (
                    <div className="recipe">
                        <li key={recipe.title}>
                            <p>Title: {recipe.title}</p>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Instructions: {recipe.instructions}</p>
                        </li>
                    </div>
                ))}
            </div>
            <button id="delete-recipes">Delete Recipes</button>
        </div>
        </div>
    );
}