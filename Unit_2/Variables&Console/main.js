// Single line comment: ctrl+/
/* 
Multi Line Comment:
shift+alt+a
 */

// * Variables

/* 
    We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.


    We can create a variable through 3 different keywords:
    1.var
    2.let
    3.const
    4.(none)

*/

let a = 2;

// (1) (2) (3) (4)
    let  b  =  1;

/* 
    1. Use JS keyword to denote the creation of a variable.
    2. The name of the variable, Variable names should be to the point
        -Should be camelCase
    3. Assignment operator: equal sign what the variable equals
    4.The initial variable value, its starting data value    
 */

// * Variable Declaration VS Initialization

// Declaration
let x;
console.log("Declaration of x: ", x);

let apple;

// Initialization : variable is given/ set a value.
let y = 4;

let life = 42;

// Reassign a variable value, reassign declared or initialized variables (not const keyword variables)
x = 20;
console.log("Initialization 1: " , x);

apple = 12;

// Assigning to other variables / create variable from variables
let firstName = "Bri"; // String datatype
let lastName = "Duncan";

let fullName = firstName + " " + lastName; // put a empty space between quotations to get a space in strings

/* 
    Console - a place to see text output/ code results
    -There is a console object attached to the browser

    - .log() this is the log method of the console, log will print whatever is passed


 */

console.log(fullName);