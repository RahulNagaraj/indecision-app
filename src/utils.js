console.log('util.js is running!');

const square = (x) => x * x;

const cube = (x) => Math.pow(x, 3);

export default (a, b) => a / b;

export {
  square,
  cube
};
