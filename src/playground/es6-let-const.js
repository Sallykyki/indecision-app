//var is function scoped
var nameVar = "Jack";
var nameVar = "John";
console.log("nameVar", nameVar);

let nameLet = "Jen"; // cannot redefine
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank"; //cannot redefine or reassign
console.log("nameConst", nameConst);

//let & const are block level scoped
function getPetName() {
  var getPetName = "Hal";
  return getPetName;
}
getPetName();

//Block scoping, when sth is block level scope not only is it bound to functions
// it's also bound to code blocks things like the code block for a loop or an IF statement

const fullName = "Andrew Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName); //Andrew
}

console.log(firstName); //Andrew
