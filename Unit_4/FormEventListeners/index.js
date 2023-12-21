// this is an example of how you can access the form from js

const form = document.querySelector('form');
const table = document.querySelector('tbody');

/* in order to look at certain parts of something in html

we can console.log then add the either the class or id name in parenthese

console.log(form.species) this access the class name of species in the form

console/log(object.values(form)); this accesses all the values or inputs of the form

console.log(form[].placeholder)

*/

// event lister

form.addEventListener('submit' , e => {
    e.preventDefault(); // stops default refresh
    console.log('HIT')

    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    console.log(animal);

    form.reset();// clears input
    form[0].focus();// targets 1st input when new

    displayTable();

})

// display to table function

function displayTable() {
    animals.forEach((animal, i) =>{
        console.log('loop', i, animal);

        //create
        let tr = document.createElement('tr');

        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');
       

        // assign

        id.textContent = i + 1;
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

        //append/set

        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
}
