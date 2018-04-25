console.log('App.js is running');
const appRoot = document.getElementById('app');

// JSX
const app = {
  title: 'Indecision App',
  subTitle: 'A TODO App',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderIndecisionApp();
}

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove All</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}

renderIndecisionApp();
