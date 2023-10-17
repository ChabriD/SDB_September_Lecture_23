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