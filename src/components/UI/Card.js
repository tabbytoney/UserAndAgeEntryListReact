import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  // Card will have the info from Add User. Use props.children to get that info (AddUser is the parent)
  // With props.className - can use className in other places as well, like our own components. Ex:
  // when we use "className= " in the Card.js component. This merges an external class (props.className)
  // with an internally defined one - classes.card
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;

// Bc Card is a custom component and not a built in html one, it cant just accept the className's property.
// We need to make sure we can use the className in this file but also any classes assigned to Card
// in other files (like in AddUser.js)
