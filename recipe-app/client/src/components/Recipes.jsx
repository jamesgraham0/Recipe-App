import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRecipe } from './actions/index';
import DetailView from './DetailView';
import { getRecipesAsync, deleteRecipeAsync, selectRecipeAsync, editRecipeAsync } from '../redux/recipes/thunks';
import { AiOutlineEdit } from 'react-icons/ai';


export default function Recipes() {
    const [recipe, setRecipe] = useState();
    const recipes = useSelector(state => state.recipes.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesAsync());
    }, []);

    function deleteHelper(event, recipeID) {
        event.preventDefault();
        dispatch(deleteRecipeAsync(recipeID));
        setRecipe('');
    }

    function selectHelper(event, recipe) {
        event.preventDefault();
        dispatch(selectRecipeAsync(recipe));

        setRecipe(recipe);
    }

    function editHelper(event, recipe) {
        event.preventDefault();
        // take p tag innerHTML and copy it into textareas
        
        let recipeToEdit = null;
        let tTime = '';
        let tTitle = '';
        let tIngredients = '';
        let tInstructions = '';
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
                    className: 'edit-textarea',
                    innerHTML: tTime
                });
                timeTextarea.setAttribute("onkeypress", enterPressed(event));
                pTime.replaceWith(timeTextarea); // Replace the p tag directly with the new textarea
                
                const titleTextarea = Object.assign(document.createElement('textarea'), {
                    className: 'edit-textarea',
                    innerHTML: tTitle
                });
                pTitle.replaceWith(titleTextarea); 
                
                const ingredientsTextarea = Object.assign(document.createElement('textarea'), {
                    className: 'edit-textarea',
                    innerHTML: tIngredients
                });
                pIngredients.replaceWith(ingredientsTextarea); 

                const instructionsTextarea = Object.assign(document.createElement('textarea'), {
                    className: 'edit-textarea',
                    innerHTML: tInstructions
                });
                pInstructions.replaceWith(instructionsTextarea); 
            }
        }

        function enterPressed(event) {
            let key = event.keyCode || event.which;
            console.log("here");
            if (key == 13) {
                alert("Enter pressed I did it");
            }
        }


        // take values from textareas and copy it into p tags
        

        // let editRecipe = {
        //     id: recipe.id,
        //     selected: recipe.selected,
        //     title: tTitle,
        //     ingredients: tIngredients,
        //     instructions: tInstructions,
        //     time: tTime
        // };
        // dispatch(editRecipeAsync(editRecipe));
        // setRecipe(recipe);
    }

    return (
        <div className="recipes">
            <h2>Your Recipes</h2>
            <div id="recipe-container">
                <div className="recipes">
                    {recipes && recipes.map((recipe) => (
                        <div key={recipe.id.toString()} className="recipe" id={recipe.id.toString()}>
                            <p id="p-time">{recipe.time}</p>
                            <button id="recipe-button-select" onClick = {(event) => selectHelper(event, recipe)}>Select</button>
                            <button id="recipe-button-x" onClick = {(event) => deleteHelper(event, recipe.id)}>X</button>                                            
                            <button id="recipe-button-edit" onClick = {(event) => editHelper(event, recipe)}><AiOutlineEdit/></button>
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