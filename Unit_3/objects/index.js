//! Objects

let marvelHero = {
    fullName: 'Tony Starks',
    codeName: 'Iron-Man',
    age: 25,
    active: true
}

/* Object Literal
    When our values are written within our keys.
        -Hard Coded

   * Structure 
        
        keyword objectName = {
            key: value,
        }

  * Objects are dictionaries       
 */

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

console.log(theSimpsons.genre);
console.log(theSimpsons['genre']);

console.log(theSimpsons.seasons['season one']);

theSimpsons.characters = ['homer', 'marge', 'Bart', 'Lisa', 'Maggie'];
console.log(theSimpsons);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push('Ned Flanders');
console.log(theSimpsons.characters);

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 1,
    movies: [
        {
            title: 'The Best Man',
            genre: rom-com,
            ratings: 4,
            run_time: 130,
            released: 2-1-1999
        },
        {
            title: 'The Best Man holiday',
            genre: rom-com,
            ratings: 4,
            run_time: 130,
            released: 2-1-2013
        },
    ]
        
    shows: [
        {
            title: 'Dave'
            numSeasons: 3
            seasons: [
                {
                    season: 1,
                    numEpisodes: 10,
                    episodes:[
                        {
                            title: "the dog",
                            aired: 1-12-2013
                        }
                    ]
                }
            ]

            
        }
    ]
}

console.log(hulu.movies);