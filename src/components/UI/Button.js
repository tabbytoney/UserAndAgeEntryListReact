import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    // type uses props so the button can be used outside of this file and in dynamic ways
    // Sets a fallback type of 'button' in case a type isnt found
    // Any onClick function received by Button will be passed on to this onClick on this button
    // props.children - // want to output some content (ex: from AddUser.js) between button tags, will get that content
    // between the tags of the Button component
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

// This button is used in AddUser.js
