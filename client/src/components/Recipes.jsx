import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectRecipe } from './actions/index';
import DetailView from './DetailView';
import { getRecipesAsync, deleteRecipeAsync, selectRecipeAsync, editRecipeAsync } from '../redux/recipes/thunks';
const { v4: uuidv4 } = require('uuid');


export default function Recipes() {
    const [recipe, setRecipe] = useState();
    const recipes = useSelector(state => state.recipes.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesAsync());
    }, []);

    function deleteHelper(event, recipe) {
        event.preventDefault();
        dispatch(deleteRecipeAsync(recipe));
        setRecipe(recipe);
    }

    function selectHelper(event, recipe) {
        event.preventDefault();
        dispatch(selectRecipeAsync(recipe));
        setRecipe(recipe);
    }

    let alreadyEdited = 0;

    function editHelper(event, recipe) {
        event.preventDefault();
        // take p tag innerHTML and copy it into textareas
        if (alreadyEdited) {
            recipe = event.currentTarget.recipe;
        }
        
        let recipeToEdit = null;
        let listOfRecipes = document.getElementsByClassName('recipe');
        for (let r of listOfRecipes) {
            if (r.id == recipe.id) {
                recipeToEdit = r;
                
                // Get the p tags
                let pTags = recipeToEdit.getElementsByTagName("p");
                let pTime = pTags[0];
                let pTitle = pTags[1];
                let pIngredients = pTags[2];
                let pInstructions = pTags[3];
                
                // String values of the p tags
                let tTime = pTime.innerHTML;
                let tTitle = pTitle.innerHTML;
                let tIngredients = pIngredients.innerHTML;
                let tInstructions = pInstructions.innerHTML;

                const timeTextarea = Object.assign(document.createElement('textarea'), {
                    id: 'tTime',
                    className: 'edit-textarea',
                    innerHTML: tTime
                });
                pTime.replaceWith(timeTextarea); // Replace the p tag directly with the new textarea
                
                const titleTextarea = Object.assign(document.createElement('textarea'), {
                    id: 'tTitle',
                    className: 'edit-textarea',
                    innerHTML: tTitle
                });
                pTitle.replaceWith(titleTextarea); 
                
                const ingredientsTextarea = Object.assign(document.createElement('textarea'), {
                    id: 'tIngredients',
                    className: 'edit-textarea',
                    innerHTML: tIngredients
                });
                pIngredients.replaceWith(ingredientsTextarea); 

                const instructionsTextarea = Object.assign(document.createElement('textarea'), {
                    id: 'tInstructions',
                    className: 'edit-textarea',
                    innerHTML: tInstructions
                });
                pInstructions.replaceWith(instructionsTextarea); 

                // Add a "Done" button to finish editing
                const doneButton = Object.assign(document.createElement('button'), {
                    id: "recipe-button-done"
                });
                doneButton.innerHTML = "Done";
                doneButton.addEventListener("click", done);
                doneButton.recipe = recipeToEdit;
                recipeToEdit.childNodes.item(3).replaceWith(doneButton); 
            }
        }
    }


    function done(event) {
        event.preventDefault();
        let recipe = event.currentTarget.recipe;
        
        // Get the textareas
        let tTimeTag = document.getElementById("tTime");
        let tTitleTag = document.getElementById("tTitle");
        let tIngredientsTag = document.getElementById("tIngredients");
        let tInstructionsTag = document.getElementById("tInstructions");


        // take values from textareas and copy it into p tags
        let tTime = tTimeTag.value;
        let tTitle = tTitleTag.value;
        let tIngredients = tIngredientsTag.value;
        let tInstructions = tInstructionsTag.value;


        const pTime = Object.assign(document.createElement('p'), {
            id: "p-time",
            innerHTML: tTime
        });
        tTimeTag.replaceWith(pTime); // Replace the textarea tag directly with the new p tag
        
        const pTitle = Object.assign(document.createElement('p'), {
            id: "p-title",
            innerHTML: tTitle
        });
        tTitleTag.replaceWith(pTitle);

        const pIngredients = Object.assign(document.createElement('p'), {
            id: "p-ingredients",
            innerHTML: tIngredients
        });
        tIngredientsTag.replaceWith(pIngredients);

        const pInstructions = Object.assign(document.createElement('p'), {
            id: "p-instructions",
            innerHTML: tInstructions
        });
        tInstructionsTag.replaceWith(pInstructions);

        // Add the "Edit" button back
        const editButton = Object.assign(document.createElement('button'), {
            id: "recipe-button-edit"
        });
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", editHelper);
        document.getElementById('recipe-button-done').replaceWith(editButton); 

        // Update state and server
        let editRecipe = {
            id: recipe.id,
            selected: false,
            title: tTitle,
            ingredients: tIngredients,
            instructions: tInstructions,
            time: tTime
        };
        editButton.recipe = editRecipe;
        alreadyEdited = 1;

        dispatch(editRecipeAsync(editRecipe));
        
        setRecipe(recipe);
    }

    return (
        <div className="recipes">
            <h2>Your Recipes</h2>
            <div id="recipe-container">
                <div className="recipes">
                    {recipes && recipes.map((recipe) => (
                            <div key={uuidv4()} className="recipe">
                                <p id="p-time">{recipe.time}</p>
                                <button id="recipe-button-select" onClick = {(event) => selectHelper(event, recipe)}>Select</button>
                                <button id="recipe-button-x" onClick = {(event) => deleteHelper(event, recipe)}>X</button>                                            
                                <button id="recipe-button-edit" onClick = {(event) => editHelper(event, recipe)}>Edit</button>
                                <h3>Title:</h3>
                                <p id="p-title">{recipe.title}</p><br/>
                                <h3>Ingredients:</h3>
                                <p id="p-ingredients">{recipe.ingredients}</p><br/>
                                <h3>Instructions:</h3>
                                <p id="p-instructions">{recipe.instructions}</p><br/>
                            </div>
                    ))}
                </div>
            </div>
            <DetailView/>
        </div>
    );
}