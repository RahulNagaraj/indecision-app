class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecison App';
    const subTitle = 'A simple todo app';
    const options = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4'];
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map((option, i) => {
            return <Option key={i} optionText={option} />
          })}
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
        <div>
        <form>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
