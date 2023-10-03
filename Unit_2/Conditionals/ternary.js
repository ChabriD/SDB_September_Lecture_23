/* 
Ternary Conditional Statement
- Super cool syntax
- shortcut for writing an if, if else, or else if statement
- condition ? true result : false result;
- ternaries require the default/ele=se catch all, has to have both

 */

let num = 6;

// Ternary:

(num > 0) ? console.log('yes!') : console.log('nope');

// Instead of: 
if(num > 0) {
    console.log('yes')
} else {
    console.log('no')
}

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary
(x == 0) ? console.log('hello') : (x < 0) ? console.log('hi') : console.log('goodbye')