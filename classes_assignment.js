// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
//
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

console.log("1.a._________________________________________")

class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
  }


let john = new Person("John", "Anthony", "Fiorentino");
let susan = new Person("Susan", "Megan", "Fiorentino");

console.log(john.firstName)

console.log("1.b._________________________________________");

console.log(john.fullName());
console.log(susan.fullName());

// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
//
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log("2.a._________________________________________")

class Book {
  constructor (title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
  }
  isGood() {
    if (this.rating >= 7) {
      return true;
    } else {
      return false;
    }
  }
}

let percy = new Book("Percy Jackson", "Rick Riordan", 5);
let hp = new Book("Harry Potter", "J.K. Rowling", 10);
let myOwn = new Book("My Own Devices", "Dessa", 7);

console.log("2.b._________________________________________");

console.log(percy.isGood());
console.log(hp.isGood());
console.log(myOwn.isGood());

// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
// d. Add a method called `toString` that returns a description of the dog:

class Dog{
  constructor(name, breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!")
  }
  feed() {
    if (this.hungry) {
      this.hungry = false;
      console.log("Woof!");
    } else {
      console.log("This dog doesn't look hungry!")
    }
  }
  toString() {
    return `${this.name} is a ${this.breed}. ${this.name} is feeling ${this.mood}. It is ${this.hungry} that ${this.name} is hungry`
  }
}

let buddy = new Dog("Buddy", "Cavalier King Charles", "mean", true);
let prince = new Dog("Prince", "Chihuahua", "up tight", false);
let cinco = new Dog("Cinco", "Husky", "Loving", true);

console.log(buddy);
buddy.feed();
console.log(buddy);

console.log(prince);
prince.playFetch();
console.log(prince);

console.log(cinco.toString());

// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
//
//
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
//
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

console.log("4.a._________________________________________");


let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

console.log("4.b._________________________________________");

class Celsius{
  constructor(celsius){
    this.celsius = celsius;
  }
  getFahrenheitTemp() {
    return 1.8 * this.celsius + 32;
  }
  getKelvin() {
    return this.celsius + 273
  }
  isBelowFreezing() {
    if(this.celsius <= freezingPoint.celsius){
      return true;
    } else {
      return false;
    }
  }
}

let ten = new Celsius(10);
let zero = new Celsius(0);
let twentythree = new Celsius(23);

console.log(ten.getFahrenheitTemp());
console.log(ten.getKelvin());
console.log(ten.isBelowFreezing());

console.log(zero.getFahrenheitTemp());
console.log(zero.getKelvin());
console.log(zero.isBelowFreezing());

console.log(twentythree.getFahrenheitTemp());

// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


console.log("5._________________________________________");

class Movie{
  constructor(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.cast = cast;
    this.description = description;
  }
  blurb() {
    return `${this.name} came out in ${this.year}. It is about ${this.description} starring ${this.cast}.`
  }
}

let goodWill = new Movie("Good Will Hunting", 1997, "Drama", ["Matt Damon", "Ben Affleck", "Robin Williams"], "A genius troubled youth has his life changed by his therapist." )

console.log(goodWill.blurb())

// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
//
function Vector(x,y) {
  this.x = x;
  this.y = y;
}


class VectorStuff{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  plus(anotherVec) {
    let plusVec = new Vector((this.x + anotherVec.x), (this.y + anotherVec.y));
    return plusVec;
  }
  minus(anotherVec) {
    let minusVec = new Vector((this.x - anotherVec.x), (this.y - anotherVec.y));
    return minusVec;
  }
  getLength() {
    return Math.hypot(this.x, this.y)
  }
}

let twoFour = new VectorStuff(2,4);
let oneThree = new VectorStuff(1,3);
let threeFour = new VectorStuff(3,4);


console.log(twoFour.plus(oneThree));
console.log(twoFour.minus(oneThree));
console.log(threeFour.getLength());

// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
//
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
//
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
console.log("7.________________________");

class Car{
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  static numberOfWheels() {
    return 4;
  }
}
let vw = new Car("Volkswagen", "Jetta");
let sentra = new Car("Nissan", "Sentra");

console.log(Car.numberOfWheels(vw));
console.log(Car.numberOfWheels(sentra));

class Bike{
  constructor(gears, hasBells) {
    this.gears = gears;
    this.hasBells = hasBells;
  }
  static numberOfWheels() {
    return 2;
  }
}

let schwinn = new Bike(10, true);
let huffy = new Bike(1, false);

console.log(Bike.numberOfWheels(schwinn));
console.log(Bike.numberOfWheels(huffy));

// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
//
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
//
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
//
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"

console.log("8._________________________________________");

class Vehicle{
  constructor(color, name){
    this.color = color;
    this.name = name;
  }
  makeSound() {
    console.log("WHHOOSSSH")
  }
}

class Car8 extends Vehicle{
  constructor(color, name, make, model){
    super(color,name);
    this.make = make;
    this.model = model;
  }
  static numberOfWheels() {
    return 4;
  }
}



class Bike8 extends Vehicle{
  constructor(color, name,gears, hasBells) {
    super(color,name);
    this.gears = gears;
    this.hasBells = hasBells;
  }
  static numberOfWheels() {
    return 2;
  }
}

let mcBike = new Bike8("green", "Bikey McBikeFace", 6, true);
let mcCar = new Car8("red", "Carry McCarface", "Ford", "Mustang");

console.log(mcBike);
console.log(mcCar);
mcBike.makeSound();
mcCar.makeSound();
