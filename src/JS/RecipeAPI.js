let baseURL1 = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=';
let baseURL2 = '&number=10&ignorePantry=true&ranking=1'
window.addEventListener('load', init);

function init() {
    let bodypartsubmit = id('recipesubmit');
    bodypartsubmit.addEventListener('click', getRequest);



}

function getRequest() {
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '582d767c0fmshc8f51f180b22c08p1d0718jsn2c3fe996befc',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    let ingredient1 = document.getElementById("ingredient1").value;
    let ingredient2 = document.getElementById("ingredient2").value;
    let ingredient3 = document.getElementById("ingredient3").value;
    let ingredient4 = document.getElementById("ingredient4").value;
    let ingredient5 = document.getElementById("ingredient5").value;
    console.log(baseURL1 + ingredient1 + "%2c" + ingredient2 + "%2c" +
    ingredient3 + "%2c" + ingredient4 + "%2c"+
    ingredient5 + "%2c" + baseURL2)

    fetch(baseURL1 + ingredient1 + "%2c" + ingredient2 + "%2c" +
    ingredient3 + "%2c" + ingredient4 + "%2c"+
    ingredient5 + "%2c" + baseURL2, options)
    
        .then(response => response.json())
        .then(response => {
            let array = response;
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                postRecipes(array[i]);
            }
        })
        .catch(err => console.error(err));
 

}

function postRecipes(data){
     //Creating the div for each recipe
     const recipe = document.createElement('div');
     recipe.setAttribute('id', "recipeDiv")
     id('recipes').appendChild(recipe);
     const divBreak = document.createElement('br');
     recipe.appendChild(divBreak);


     //Creating the span, a  tags for each recipes title, image
     let textNode = document.createElement('span');
     let recipeImage = document.createElement('img');
        textNode.innerText = data.title;
        textNode.setAttribute("id", "recipeTitle");
        recipe.appendChild(textNode);
        textNode.appendChild(divBreak);
        recipeImage.setAttribute("src", data.image)
        recipe.appendChild(recipeImage);
        
       
}

function checkStatus(response) {
    if (response.ok) {
        return response.text();
    } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
}

/**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} idName - element ID
 * @returns {object} DOM object associated with id.
 */
function id(idName) {
    return document.getElementById(idName);
}

/**
 * Returns the first element that matches the given CSS selector.
 * @param {string} query - CSS query selector.
 * @returns {object} The first DOM object matching the query.
 */
function qs(query) {
    return document.querySelector(query);
}

/**
 * Returns the array of elements that match the given CSS selector.
 * @param {string} query - CSS query selector
 * @returns {object[]} array of DOM objects matching the query.
 */
function qsa(query) {
    return document.querySelectorAll(query);
}
