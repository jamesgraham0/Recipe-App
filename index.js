let jsonData;
let recipeCards = [];

function loadJSON() {
    jsonData = {
        "recipes": [
            {
                "title": "pizza",
                "ingredients": ["dough", "sauce", "cheese"],
                "instructions": ["stretch dough", "spread sauce", "sprinkle cheese", "bake for 15 mins at 400 deg. Farenheit"]
            },   
            {
                "title": "toast",
                "ingredients": ["sliced bread"],
                "instructions": ["place in toaster and toast it"]
            }   
        ]
    };
    let recipes = JSON.parse(JSON.stringify(jsonData));
    recipes.recipes.map((recipe) => {
        recipeCards.push(recipe);
    });
}

function loadRecipes() {
    recipeCards.forEach(recipe => {
        addRecipeList(recipe);
    });
}

function validRecipe() {
    // First check if the recipe's already present in the list
    let title = document.getElementById("title").value;
    for (let i = 0; i < recipeCards.length; i++) {
        if (recipeCards[i].title === title) {
            return [false, "Recipe already exists with this title"];
        }
    }

    // Second check that all areas are filled
    if (document.getElementById("title").value === "" ||
    document.getElementById("ingredients").value === "" ||
    document.getElementById("instructions").value === "") {
        return [false, "Please fill out all recipe criteria first"];
    }
    return [true, "All clear"];
}


function addRecipe() {
    let validAnswer = validRecipe();
    let trueOrFalse = validAnswer[0];

    if (trueOrFalse) {
        let recipe = {
            "title": document.getElementById("title").value,
            "ingredients": document.getElementById("ingredients").value,
            "instructions": document.getElementById("instructions").value 
        };
        addRecipeList(recipe);
    } else {
        message = validAnswer[1];
        alert(message);
    }
}

function addRecipeList(recipe) {
    document.getElementById("delete-recipes").style.display = "block";

    var recipeDiv = document.createElement("div"); 
    recipeDiv.classList = "recipe";
    
    let list = document.createElement("ul");
    let listItemTitle = document.createElement("li");
    listItemTitle.innerHTML = "Title: " + recipe.title;
    let listItemIngredients = document.createElement("li");
    listItemIngredients.innerHTML = "Ingredients: " + recipe.ingredients;
    let listItemInstructions = document.createElement("li");
    listItemInstructions.innerHTML = "Instructions: " + recipe.instructions;
    
    list.append(listItemTitle, listItemIngredients, listItemInstructions)
    recipeDiv.appendChild(list);
    document.getElementById("recipes").appendChild(recipeDiv);
}

function deleteAllRecipes() {
    // clear recipeCards
    recipeCards = [];

    // clear the dom of all recipe divs
    let parent = document.getElementById("recipes");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    document.getElementById("delete-recipes").style.display = "none";
}

function init(){
    document.getElementsByTagName('form').onsubmit = addRecipe;
    loadJSON();
    loadRecipes();
}

window.onload = init;