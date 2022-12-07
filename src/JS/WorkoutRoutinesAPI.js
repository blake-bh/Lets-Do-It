
require('Functions/HelperFunctions.js');

let baseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
window.addEventListener('load', init);

function init(){
    let bodypartsubmit = id('bodypartsubmit');
    bodypartsubmit.addEventListener('click', getRequest);

    

}

function getRequest(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c467bf97b5msh8edd1ae591cf776p1ef304jsn5cb48f373061',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    let bodyPart = id("bodybtn").value;
    
    
    fetch(baseURL, options) 
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}
