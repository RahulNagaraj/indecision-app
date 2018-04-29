import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started !</p>}
      <ol>
        {
          props.options.map((option, i) => (
            <Option
              key={i}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ol>
    </div>
  );
}

export default Options;
