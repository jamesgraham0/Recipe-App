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
        var div = document.createElement("div");
        div.classList = "recipe";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = recipe.title;

        document.getElementById("recipes").appendChild(div);
    });
}

function addRecipe() {
    let recipe = {
        "title": document.getElementById("title").value,
        "ingredients": document.getElementById("ingredients").value,
        "instructions": document.getElementById("instructions").value 
    };

    recipeCards.push(recipe);
    var div = document.createElement("div");
    div.classList = "recipe";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "blue";
    div.style.color = "white";
    div.innerHTML = recipe.title;

    document.getElementById("recipes").appendChild(div);
}

function deleteAllRecipes() {
    // clear recipeCards
    recipeCards = [];

    // clear the dom of all recipe divs
    let parent = document.getElementById("recipes");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function init(){
    document.getElementsByTagName('form').onsubmit = addRecipe;
    loadJSON();
    loadRecipes();
}

window.onload = init;