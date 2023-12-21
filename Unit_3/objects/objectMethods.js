let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        'season one': [
            {
                episode_title: 'Simpsons Movie',
                aired: '1990-01-02',

            },
            {
                episode_title: 'Simpsons show',
                aired: '1990-01-01',

            },
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running: true,
}

//* Object.keys() returns back an array of keys
// console.log(Object.keys(theSimpsons));

const listKeys = Object.keys(theSimpsons);
// console.log(listKeys);

//* Object.values() - returns an array of values
console.log(Object.values(theSimpsons));
console.log(Object.values(theSimpsons.seasons));

let objOne = {name: 'bob'};
let objTwo = {work: 'manager'};

let newObject = Object.assign(objOne, objTwo);
console.log(newObject);

let futurama = Object.assign(theSimpsons);
console.log("futurama: ", futurama);

//* delete object.key
console.log('Before: ', Object.keys(futurama));
delete futurama.currently_running;
console.log('After: ', Object.keys(futurama));

//* Object.freeze()
Object.freeze(theSimpsons);
theSimpsons.id = 2;
console.log(theSimpsons.id);