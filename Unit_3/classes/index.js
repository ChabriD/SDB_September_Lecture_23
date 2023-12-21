//! classes
/* 
    introduced in 2015
    a function that helps us create objects
    defines a category of objects

    Base Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter;
        }

        methodName(){
            code block
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
console.log(one);


//1    2
class Item {

 //   3           4
    constructor(name,desc,price) {

  //       5   6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
1. Keyword to establish type of functoin
2. name of our class. Should be Pascale case
3. keyword is run when class is wrote
4. the parameters/ values for object 
5.keyword(this) refers to specific object being created
6. name of the key to new object
7. value of keys being created

 */

let itemZero = new Item();
console.log(itemZero); // returns an obj w/ set keys that hold undefined values

let itemOne = new Item('beans', 'canned', 0.89);
console.log(itemOne);

//! Factory Functions

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType,iDesc,iCost)
console.log(useFunction);

//! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = [];
    }
}

//1            2
addToInventory(newItem) {
    //3             4
    this.items.push(newItem);
    console.log('Item Added!')
}


//5
let dryGoods = new DeptInventory('Dry Goods');
// console.log(dryGoods);
let itemTwo = new Item('corn', 'canned', 0.79);

//6
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

//! Factory Methods

class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
console.log(itemToSell);

/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

/* 

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
console.log(one);


//1    2
class Item {

 //   3           4
    constructor(name,desc,price) {

  //       5   6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}
*/

class Vehicle {
    constructor(make,model,no_wheels,color) {
        this.make = make;
        this.model = model;
        this.no_wheels = no_wheels;
        this.color = color;

    }
}

engineOn() {
    
}

let newCar = new Vehicle(vw,passat,4,black);
console.log(newCar);
