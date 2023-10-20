/* 
-syntax is on the left side of assignment operator
- great for pulling info out of an array and assigning data to its own variable.

 */

const fullName = ['Jane', 'Doe'];

const fName = fullName[0];
const lName = fullName[1];

const [firstName, lastName] = fullName;

console.log(firstName, lastName);

console.log('Hello Mrs. ${lastName}');

let database = [{},{},{}];

let myObj = {
    last
}

database.push(myObj);

//! Spread

/* 
- denoted by three consecutive periods:..
- pulls out all elements of an array and gives them to you as a standalone list of elements.

* Concept of the spread operator - Not Syntax

const fullName = ['Rocket', 'Racoon'];

...fullName // 'Rocket', 'Racoon'

const elements = ...fullname;

*/

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Mrs.');

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(math.min(...prices));

//! Rest 
const fullName2 = ['Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973}];

const [fName, lName,,, ...otherInfo] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);

