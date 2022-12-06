
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
                let array = response.results
                console.log(array.length);
                for(let i = 0; i < array.length; i++){
                    postData(array[i].name);
                    const newLineDiv = document.createElement('br');
                    qs(".list").appendChild(newLineDiv);

                }

                
            })
            .catch(console.error);
         
            





    }


    function postData(data){
        const returnData = document.createElement('div');
        let textNode = document.createTextNode(data);
        console.log(textNode);
        returnData.appendChild(textNode);
        qs(".list").appendChild(returnData);



    
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

