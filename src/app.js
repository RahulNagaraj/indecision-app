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
}

const onRemoveAll = () => {
  app.options = [];
  renderIndecisionApp();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
}

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option, i) => <li key={i}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}

renderIndecisionApp();
