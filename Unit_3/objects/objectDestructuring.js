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
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ]
}

const {characters, seasons} = theSimpsons;
console.log(characters);
characters.push('leo');
console.log(theSimpsons);
characters[5] = 'Moe';


const {currently_running: on_air} = theSimpsons;
console.log(on_air);
console.log(theSimpsons.currently_running);

//! Spread with Objects
const simpsonsCharacter = {
    simpsonHouse: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
    moesTavern: ["moe","Barney"]
};

const locations = {
    ...simpsonsCharacters,
    dmv:['Patty', 'Selma']
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}