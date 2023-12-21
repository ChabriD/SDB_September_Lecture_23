import apiKey from "./key.js";

//! Global Variables

const baseURL = 'https://api.spoonacular.com/recipes/random';
let buildURL = `${baseURL}/?apiKey=${apiKey}`;

let storedRecipes = [];


//! DOM elements

const searchForm = document.querySelector('form');
const randomCard = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');

//! Functions
const 
const displayRandomCard = recipe => {

}

const setTable = () => {
    console.log('Stored Recipe Array: ', storedRecipes);

    storedRecipes.map(obj =>)
}

// create
let div = document.createElement('div');
let card = document.createElement('div');
let img = document.createElement('img');
let body = document.createElement('div');
let title = document.createElement('h5');
let p = document.createElement('p');
let a = document.createElement('a');

//* Set Attributes

div.className = 'col';
card.className = 'card';
img.src;// needs object from array
img.alt;// needs object from array
img.className = 'card-img-top';
body.className = 'card-body';
title.className = 'card-title';
title.textContent;// need object
a.target = '_blank';
a.textContent = 'Link to recipe'

//* append to parent

p.appendChild(a);
body.appendChild(title);
body.appendChild(p);
card.appendChild(img);
card.appendChild(body);

div.appendChild(card)
//! Event Listeners
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    fetch(buildURL)
    .then(res => res.json())
    .then(data =>  { 
        // console.log(data))
        let recipe = data.recipes[0]


        let obj = {
            title: recipe.title,
            img: recipe.image,
            src: recipe.sourceUrl
        }
    
})

.catch(error => console.error(error));