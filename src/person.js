// const isAdult = x => {
//   if (x > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isAdult = x => x >= 18;

// const canDrink = x => {
//   if (x > 21) {
//     return true;
//   } else {
//     return false;
//   }
// };
const canDrink = x => x >= 21;

const isSenior = x => x >= 64;

export { isAdult, canDrink, isSenior as default };
