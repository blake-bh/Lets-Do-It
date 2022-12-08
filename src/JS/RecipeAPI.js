let baseURL1 = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=';
let baseURL2 = '&number=5&ignorePantry=true&ranking=1'
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

    fetch(baseURL1 + "banana" + baseURL2, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
 

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
