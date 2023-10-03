/* 
    Loops
        -loops through a block of code a number of times

        ! if stuck in an infinite loop:
            ctrl+c to stop it, or red stop button

    For loops:
        -takes in 3 parameters (things within the quotations)
        -initial expression
        -condition
        -increment expression

    Structure:
        for (initial expression; condition ; increment expression) {
            code block
        }   

 */

for ( i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('finished for loop');

// Start at 0 increase by 2 to 20
for(i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Start at 10 and decrease by 1 til 0
for (i = 10; i >= 0; i -= 1) {
    console.log(i); 
}

//if using a straight one a curly bracket is not needed

//spell out a word letter for letter
let firstName = "Chabri";

console.log(firstName.length);

for (let i = 0; i < firstName.length; i++) {
    console.log(i, firstName[i]);
}

// change the value of a variable with for loop
let sum = 0;

console.log(`sum equals ${sum} before the for loop.`)
 for (let i = 1; i <= 5; i++ ){
    console.log("before: ", sum);
    sum ++ i;
    console.log("after: ", sum);
 }

 console.log(`sum equals ${sum} after the for loop.`)

 /* for in loops
 - loop through the properties of an object
 
 Structure: 
 for ( key in object ) {
    code block
 }

 ^ key is a random variable name of our choice, object refers to the variable name of the object we are targeting

 */

 let student = {
    name: "Harry",
    animal: 'owl',
    degree: "magic",
    boyWhoLived: true
 }

 console.log(student.name);
 console.log(student["name"]);

 for (item in student ) {
    console.log(item);
    console.log(student[item]);
 }

 let catArray = [
    "tabby",
    "maine coon",
    "rag doll",
    "russian gray"
 ];

 for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
 }

 /* 
 For in loops can be used on objects and arrays
 but if an array index order is important, its better to use a:
 -for loop
 -for of loop
 -array.forEach()
 */

 ! for of loops do not play well with objects