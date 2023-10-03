/* 
    Conditionals
    - It's a way for devs to ask the questions and provide a response depending on what we're asking
    - devs == Inventors: we design and ask the question but also determine the answer
    - Conditionals focus on a thing being true or being false
    - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number)
 */

// If conditional statements

let isOn = true;

if (isOn == true) {
    console.log('The light is on in the room!');
};

/* 
    Structure:
    if(condition evaluated){
        code that runs if expression is true
    }
 */

if (isOn){
    console.log('The light is on, heck yeah!')
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off...')
}

let weather = 80;

if (weather < 70) {
    console.log('Some might need to grab a jacket')
}

// If else conditional 

let temp = 75;

if (temp < 70){
    console.log('I will grab a sweater')
} else {
    console.log('oh boy it is shorts weather')
}

// OR, ||, check if one statement is true or the other

let email = 'myemail@email.com';
let uName = 'wings1000';

if (email == 'myemail@email.com' || uName == 'wings1000' ) {
    console.log('welcome User') 
} else {
    console.log('Login info was incorrect.')
}

// Not, !

let rain = true;

if(!rain) {
    console.log('its nice and sunny')
}

// else if conditional