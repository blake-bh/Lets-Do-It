
(function () {
    "use strict";

    const base_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search';

    window.addEventListener('load', init);

    function init(){

        let submit = document.getElementById("ingredientSubmit");
        console.log(submit);
        submit.addEventListener('click', gRequest); 
    }




    function gRequest() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '582d767c0fmshc8f51f180b22c08p1d0718jsn2c3fe996befc',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        let ingredient = document.getElementById("ingredient").value;
        fetch(base_url + '?query='+ingredient, options)
            .then(checkStatus)
            .then(JSON.parse)
            .then((response) => {
                console.log(response);
                
                console.log(response.results[0]);
                
            })
            .catch(console.error);
            document.createElement('input');

    }


    function checkStatus(response) {
        if (response.ok) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }




})();

