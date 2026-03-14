// Objects Part 4, Object methods (functions inside objects)


/* Task 1 Create an object called person with:name, age, greet() method. The method should print a greeting using the object's name. */


const person = {
    name: "Iqra",
    age: 22,
    greet: function(){
        return `Hello my name is ${this.name}.`
    }
}

console.log(person.greet());


/* Task 2 Create an object called calculator with: add(), subtract(). Each method should return a result. */

const calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    }
}

console.log(calculator.add(2,3));
console.log(calculator.subtract(2,3));


/* Task 3 Create an object called user with:name, address object. The address should contain:city, country. Print the city. */

const user = {
    name: "Iqra",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}

console.log(user.address.city);


/* Task 4 Create an object called car with: brand: "BMW", model: "M3", year: 2020, getCarInfo(). It should print all car information in one sentence.*/


const car = {
    brand: "BMW",
    model: "M3",
    year: 2020,
    getCarInfo: function(){
        return `${this.brand} ${this.model} was released in ${this.year}`
    }
}

console.log(car.getCarInfo());



/* Task 5 Create an object called bankAccount with:owner: "John"
balance: 1000, deposit(amount) and withdraw(amount) method. call both methods. */

const bankAccount = {
    owner: "John",
    balance: 1000,
    deposit: function(amount){
        this.balance += amount;
        return this.balance;
    },
    withdraw: function(amount){
        this.balance -= amount;
        return this.balance;
    }
}

console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200));


/* Task 6 Create an object called counter with:count: 0, increment() and decrement() method. Call them multiple times.*/

const counter = {
    count: 0,
    increment: function(){
        return this.count+=1;
    },
    decrement: function(){
        return this.count-=1;
    }
}

for (let i = 0; i < 5; i++){
    console.log( counter.increment()); // 5-0 = 5 it run 5 times
}
for (let i = 1; i <= 5; i++){
    console.log( counter.decrement());
}

