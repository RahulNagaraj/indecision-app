'use strict';

console.log('App.js is running');

// JSX

// Exercise 2
var app = {
  title: 'Indecision App',
  subTitle: 'A TODO App',
  options: ['One']
  // Exercise 3
};function getOptions(options) {
  if (options && options.length > 0) {
    return React.createElement(
      'p',
      null,
      'Here are your options'
    );
  }
  return React.createElement(
    'p',
    null,
    'No options'
  );
}
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  getOptions(app.options),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

// Exercise 1
var user = {
  userName: 'Rahul N',
  userAge: 23,
  userLocation: 'Bengaluru'
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.userName ? user.userName : 'Anonymous'
  ),
  user.userAge && user.userAge >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.userAge
  ),
  getLocation(user.userLocation)
);

var root = document.getElementById('app');

ReactDOM.render(template, root);
