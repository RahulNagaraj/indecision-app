console.log('App.js is running');

// JSX
var template = <h1 id="h1id">This is JSX from app.js</h1>;
var root = document.getElementById('app');

ReactDOM.render(template, root);
