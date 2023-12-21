/* 
! DOM
- means Document Object Model
-can access only through broswer

Frame:
- Document: HTML page(in the browser)
- document is a global variable
-Objects it uses: Elements and comments(nodes)
-Model: arrangement

- represents objects in a structure and content of a document on the web

BOM

- Browser Object Model
- Window- global variable
- various methods available
 */

function askForStuff() {
    prompt();
}

// askForStuff();

console.log(document);
console.log(document.URL);
console.log(document.location); // same as URL except it returns an object form
console.log(document.title);
document.title = "DOM It";

//! Creating Our First Element

let h1 = document.createElement('h1');
console.log(h1);

/* Our variable now has access to our various properties

- innerHTML: can inject a block of HTML
- innerText: returns the visible text contained in a node.
- textContent: returns the full text

ex of textContent:  <p>Hello <b>World</b></p>
        ~ innerText would return just "Hello"
        ~ textContent would return "Hello World"

*/

h1.innerText = 'Creating my first Dom element';
console.log(h1);

/* events order

    1. Create element
    2. apply the value/property
    3.place the element
 */

    //console.log(document.body);
    document.body.appendChild(h1);

h1.style.color = "orange";
h1.style.textAlign = "center";

h1.className = "h1-class-name";
// js requires camelCasing as className instead of class due to it being a keyword.

/* 

! Finding Elements

HTMLCollection

- like an array
- allows access to index, properties, and methods to help naviagte and modify.
- does not allow to modify a group of elements all at once.
- can loop through it.
- can use .length property to get the size of the list.

to access multiple elements must use:
    - getElementsByTagName()
    - querySelectorAll()
    - getElementsByClassName()

*/

let li = document.getElementsByTagName('li');
console.log(li);

let bathroom = li[0];
bathroom.style.color ="red";

for(i of li) {

    i.style.color ="green";
}

/* 

.querySelector()

    - gets first instance of an element or null if nothing is found.

    - can target by ID, class, or element
        -will need to append # for ID
        - will need to append . for Class


 */

        let firstLi = document.querySelector('li');
        // console.log(firstLi);

let toDoList = document.querySelector
('#listTitle');
console.log(toDoList);

let newListItem = document.querySelectorAll(li);

//! Event Listeners
/* 

allows us to execute a function when an event occurs

.addEventListener()
    - DOM node method
    - requires an event to "listen for" or type and a callback function.

    ex: node.addEventListener('click', () => {})

*/