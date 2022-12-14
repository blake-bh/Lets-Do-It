

let baseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
window.addEventListener('load', init);

function init() {
    let bodypartsubmit = id('bodypartsubmit');
    bodypartsubmit.addEventListener('click', getRequest);



}

function getRequest() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c467bf97b5msh8edd1ae591cf776p1ef304jsn5cb48f373061',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    let bodyPart = id("bodybtn").value;
    if (bodyPart == 'lower arms' || bodyPart == 'lower legs' || bodyPart == 'upper legs' || bodyPart == 'upper arms') {
        bodyPart = bodyPart.replace(' ', '%20');
    }
    console.log(bodyPart);
    console.log(baseURL + bodyPart);


    fetch(baseURL + bodyPart, options)
        .then(response => response.json())
        .then(response => {
            let array = [];
            array = response;
            array = array.slice(0,10);
            for (let i =0; i < array.length; i++){
                postWorkouts(array[i]); 
            }
            
        })
        .catch(err => console.error(err));

}

function postWorkouts(data){
    const divbreak = document.createElement('br');
    let workoutimage = document.createElement('img');
    workoutimage.setAttribute("src", data.gifUrl);
    const workoutname = document.createElement('div');
    workoutname.setAttribute('id', 'center');
    let textnode = document.createElement('span');
    textnode.innerText = data.name;
    workoutname.appendChild(textnode);
    textnode.appendChild(divbreak);
    workoutname.appendChild(workoutimage);
    id('post').appendChild(workoutname);
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
