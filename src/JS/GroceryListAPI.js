
(function () {
    "use strict";

    const base_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search';

    window.addEventListener('load', init);

    function init() {

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
        fetch(base_url + '?query=' + ingredient + '&number=100', options)
            .then(checkStatus)
            .then(JSON.parse)
            .then((response) => {
                let array = response.results;
                console.log(array.length);
                qs('.list').innerHTML = '';
                for (let i = 0; i < array.length; i++) {
                    postData(array[i].name);
                }
            })
            .catch(console.error);







    }


    function postData(data) {

        
        
      

        //Creating the list items 
        const returnData = document.createElement('li');
        returnData.setAttribute("id", "IngredientItem");


        //Creating a span and adding it to the list
       /*  let textNode = document.createElement('span');
        textNode.innerText = data;
        returnData.appendChild(textNode);
 */
        //Create a button and add it to the list
        let button = document.createElement('input');
        button.setAttribute("type", "button");
        button.setAttribute("value", data);
        returnData.appendChild(button);
        button.addEventListener('click', buttonHandler);

        //Adding the list to the page
        qs(".list").appendChild(returnData);


    }

    function buttonHandler() {

        console.log(this.value);
        let ing = document.createElement('p');
        ing.setAttribute("id", "ingP")
        ing.innerText = this.value;
        id('selected').appendChild(ing);
    

        
    }


    function checkStatus(response) {
        if (response.ok) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }

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




})();

