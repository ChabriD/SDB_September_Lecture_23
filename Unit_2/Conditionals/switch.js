/* 
Switch conditional
-a switch statement executes/runs a block of code depending on different cases
- the switch is used together with a break or a default keyword or both
    -both are optional
    -break: is a keyword that breaks out of the switch block; if break is not added the next code block will run
    default: keyword that specifies code to run if no case matches
 */

    let officeCharacter = "Pam";

    switch (officeCharacter) {
        case "Michael":
            console.log("My mind is going a mile an hour");
            break;
        case "Dwight":
            console.log("Perfectenschlag");
            break;
        case "Jim":
            console.log("Bears. Beets. Battlestar Galactica");
            break;
        default:
            console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); 
    }

    // we can use backtics to create strings that can use the value of variables
    // the variable must be surrounded by ${}, 