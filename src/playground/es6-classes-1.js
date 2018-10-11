class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "Undefined") {
    super(name, age); //call the parennt constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is  ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  //   hasHomeLocation() {
  //     return !!this.homeLocation;
  //   }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am traveling from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Student("Andrew Mead", 26, "computer science");
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

const she = new Traveler("Sally", 28, "Helsinki");
console.log(she.getGreeting());
