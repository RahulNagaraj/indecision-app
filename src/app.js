import divide, { square, cube } from './utils.js';
import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running');

console.log(square(3));
console.log(cube(4));
console.log(divide(4, 2.2));

console.log(isAdult(31));
console.log(canDrink(21));
console.log(isSenior(62));
