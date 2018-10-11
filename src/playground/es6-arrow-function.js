const square = function(x) {
  return x * x;
};
console.log(square(8));

// const squareArrow = x => {
//   return x * x;
// };

const squareArrow = x => x * x;
console.log(squareArrow(9));

//Challenge - use arrow function

const fullName = "Mike Smiths";

// const getFirstName = fullName => {
//   return fullName.split(" ")[0];
// };

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName(fullName));
