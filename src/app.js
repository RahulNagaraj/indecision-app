console.log('App.js is running');

// JSX

// Exercise 2
var app = {
  title: 'Indecision App',
  subTitle: 'A TODO App',
  options: ['One']
}
// Exercise 3
function getOptions(options) {
  if(options && options.length > 0) {
    return <p>Here are your options</p>
  }
  return <p>No options</p>
}
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {getOptions(app.options)}
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

// Exercise 1
var user = {
  userName: 'Rahul N',
  userAge: 23,
  userLocation: 'Bengaluru'
};
function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}
var templateTwo =(
  <div>
    <h1>{user.userName ? user.userName : 'Anonymous' }</h1>
   {(user.userAge && user.userAge >=18) && <p>Age: {user.userAge}</p>}
    {getLocation(user.userLocation)}
  </div>
);

var root = document.getElementById('app');

ReactDOM.render(template, root);
