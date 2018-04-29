import React from 'react';

const Option = (props) => {
  return (
    <div>
      <li>
        {props.optionText}
        <button onClick={(e) => props.handleDeleteOption(props.optionText)}>remove</button>
      </li>
    </div>
  );
}

export default Option;