// ! Iteration Methods

/* 

- does not destroy the original array
- take in callback function
-loops through arrays
-must have a return

*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

const filteredFruit = fruits.filter(fruit => {
    console.log('parameter: ', fruit)
    let result = fruit !== 'mango';
    console.log('inside filter: ', result);
    return result;
});

console.log(filteredFruit);

let fruit1 ='pineppple';
console.log(fruit1.includes('apple'))

const filterFruit3 = fruits.filter(remove.mango);
console.log('filtered: ', filterFruits3);
console.log('original: ', fruits);

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

const noFives = 

let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

movies.push({name: "it", category: 'horror'});
movies.push({name: "Get Out", category: 'horror'});
movies.push({name: "Taken", category: 'Action'});

const actionMovies = movies.filter(movie => movie.category ==='Action');
const horrorMovies = movies.filter(movie => movie.category === "horror");

console.log('horror: ', horrorMovies);
console.log('action: ', actionMovies);

//! .forEach()

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i])
}

newFoodList.forEach((item, i) => {
    console.log('forEach: ', item, "index: ", i);
});

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movieList = ["Monsters Inc", "Toy Story", "Bolt"];

movieList.push('Baby Boy');
movieList.splice(1,2,'Madea');

movieList.forEach((item,index) => console.log('movie:', item,index));

// ! .map()

let numArray = [];
let fizzBuzzArray =[];

for(let i = 0; i < 101; i++) {
    numArray.push(i);
}

numArray.map(x => {
    if(x % 15 === 0) {
        fizzBuzzArray.push(x)
    };
});

console.log(fizzBuzzArray);

/*
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let reversed = arr.reverse();
console.log('reversed: ', reversed);
