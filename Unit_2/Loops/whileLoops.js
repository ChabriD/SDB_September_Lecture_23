let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
  ];

  let structure = city[0];
  //console.log(structure);// building

  let pos = 0;
  // console.log(city[pos]); // building

  console.log("Welcome to the Adventures of Spider Man!! Looks like there's a thief on the loose!")

while ( structure != "empty street") {
    console.log(`SpiderMan swings from the ${structure} in pursuit of the theif!`)
    pos++;
    structure = city[pos];
    console.log(`Spiderman lands on the ${structure}`);
    console.log(`--------`);
}  

console.log(`Spider Man lands in the ${structure}! He corner and confronts the thief! Spidy saves the day again!!`);

// mock switch a group of account from deactivate to activated


// declare and initialize an object
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
  };

// use square bracket notation with the object property to get true or false value
let acctNum = 1;

do{
    console.log(
        `acct${acctNum} is currently inactive: set to ${
          accounts[`acct${acctNum}`]
        }.`
      );
}

console.log('Activating');
accounts[`acct${acctNum}`] = true;

console.log(
    `acct${acctNum} is currently active: set to ${accounts[`acctNum`]}`
);