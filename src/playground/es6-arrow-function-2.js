//argument object - no longer bound with arrow function

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(55, 2, 3));

// this keyword - no longer bound

// const user = {
//   name: "Andrew",
//   cities: ["Philadelphia", "New York", "Dublin"],
//   printPlacesLived: function() {
//     const that = this;
//     this.cities.forEach(function(city) {
//       console.log(that.name + " has lived in " + city);
//     });
//   }
// };
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in " + city);
    // });

    //map method like forEach but transform each item, getting a new array back
    return this.cities.map(city => this.name + " has live in " + city);
  }
};

console.log(user.printPlacesLived());

//challenge
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
