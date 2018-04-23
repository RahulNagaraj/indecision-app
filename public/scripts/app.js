'use strict';

console.log('App.js is running');

// JSX
var template = React.createElement(
  'h1',
  { id: 'h1id' },
  'This is JSX from app.js'
);
var root = document.getElementById('app');

ReactDOM.render(template, root);
