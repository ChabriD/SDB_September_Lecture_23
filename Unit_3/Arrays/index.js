/* 
Arrays
-indexes start at zero
-using a property called Length. we can find the sum of data
-uses square brackets []

*/

/* This is an example of an array 
    (*)         (0)      (1)       (2)          (3)
    let list = ['milk', 'bread', 'chicken', 'coffee'];
    (how you declare and name the variable)

    console.log(list[2]);
    (4)

    *- must declare and name the variable (array). so the array's name is List.
    0,1,2,3- these are items in the array. Arrays start counting at the number Zero and not one
    4- is how you invoke/call the system to display the array or an item in the array.
    (in this example it is asking the console to show item 2 in the array which would be chicken;)
*/

let avengers = [
    'Nick', 2 , false, 'steve', 'bruce',[
        'tony', 8, true
    ]
];

console.log(typeof avengers);
console.log(avengers instanceof array);

/* 
 */

//! array methods

//.push()

let food = ['Pie', 'Shrimp', 'chicken', 'steak', 'alfredo'];

food.push('cake'); (this is how you add an item to an Array FileList. so you are pushing this item to the end of the array)

console.log('PUSH: ', food); (this is how you invoke/ tell the console to show array with the new item that has been added)

//.splice(position, how many removed, with what)

let food = ['Pie', 'Shrimp', 'chicken', 'steak', 'alfredo'];

food.splice(1,1, 'tacos');
            (1),(2),(3)
        1-the Postion where you want the new item to go 
        2- this is the item that you are removing
        3- this is the new item or string that you are replacing the old one 
console.log('splice: ', food)

food.splice(1,0, 'apple');
console.log('Splice 2: ', food);

//.pop() removes items from the end of an array

let food = ['Pie', 'Shrimp', 'chicken', 'steak', 'alfredo'];

 food.pop(); (this will remove alfredo from the end of the array)
 console.log('POP:' , food); (this will show the array without alfredo);



 //.shift() removes items from the beginning of the array
 let food = ['Pie', 'Shrimp', 'chicken', 'steak', 'alfredo'];
 food.shift();
 console.log('Shift: ', food);

 //.unshift(add item, [optional])








