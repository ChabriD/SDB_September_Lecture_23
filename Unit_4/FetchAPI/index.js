/* 

! fetch

-Before fetch() we need to us an http request
-is an api
- is a method that requires one argument
- handles request and respone
returns a promise

*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
// console.log(fetch(testEndpoint));

//fetch(testEndpoint)
fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => console.log(res))
// .then(res => console.log(res.url));
.then(res => console.log(res.body));

/* 

! JSON

- Javascript Object Notation
- Very lightweight for storing and transferring data
- easy to understand

*syntax*
{
    "key": "value",
    "key": true,
    "key": 0
}

- Everything is wrapped in quotes with exception in integers and booleans.
- data is seperated by a comma
- cant hold comments or functions


*/

fetch(testEndpoint)
    .then(repsonse => Response.json()) // turns promise into a JSON
    .then(data => {
        console.log(data); // allows us to work with object
    })


// * json.parse(string);
let myText = `{"name":"Gollum", "lost_ring":true}`;
console.log(myText);
let parseJson = JSON.parse(myText);
console.log(parseJSON.name);

const url = "https://meowfacts.herokuapp.com/";

//function getCatFacts() {
    //fetch(url)
      //  .then(res => res.json())
       // .then(obj => {
            //console.log(obj);
      //  })
//}

const getCatFacts = async() => {
    let res = await fetch(url);
    let results = await res.json();
    let data = results.data[0];
    displayIt(data);
}

getCatFacts();

/* 

! Error Handling

Keywords: try and catch

syntax

try{
    code block to try
} catch (err) {
    code block to respond to error
}

*/

const getCatFacts = async() => {
    try {
        let res = await fetch(url);
        let results = await res.json();
        let data = results.data[0];
            displayIt(data);
    } catch (err) {
        console.error(err);
    }
}

getCatFacts()

//* Local Fetch
fetch('./local.json')
    .then(res => res.json())
    .then(data => {
        let members = data.fellowship;
        console.log(members);

        for(m of members){
            displayIt(m.name)
        }
    })