
(function () {
    "use strict";

    const base_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch'

    window.addEventListener("load", init);



    function init() {
        gRequest();
    }



    function gRequest() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '582d767c0fmshc8f51f180b22c08p1d0718jsn2c3fe996befc',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        fetch(base_url + '?query=pasta', options)
            .then(checkStatus)
            .then(JSON.parse)
            .then((response) => {
                console.log(response);
            })
            .catch(console.error);

    }


    function checkStatus(response) {
        if (response.ok) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }











})();

