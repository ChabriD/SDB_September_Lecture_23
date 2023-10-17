/* 
! Hoisting 

    -JS reads from top to bottom in two different passes.

    1st pass:
        -made by the compiler. This is where hoisting is initiated.
        -Complied for execution
    2nd pass:
        - Variables are assigned.
        - Executes any hoisted code.

 */

 console.log(names);
 let names = 'A';

 b();

 function b () {
    console.log("I have been hoisted!");
 }

 /* 
    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below:

    1. For numbers evenly divisiby by 3, print "Fizz" instead of the number.
    2. For numbers evenly divisiby by 5, print "Buzz" instead of the number.
    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.
    4. For any number that is not divisibly by either 3 or 5, print the number itself.
*/




let number = 0
for (i=1; 1<=50;i++) {
    if(i%3==0) {
        console.log("fizz");
    } if (i%5 == 0){
        console.log("buzz");
    } if (i % 3 ==0 && i %5 ==0) {
        console.log("fizzbuzz");
    }
}

