/* eslint-disable no-restricted-globals */
import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
  // add function/handler for what to do when you submit the information
  const addUserHandler = () => {
    // prevents the default, which is that a request is sent and the page reloads
    event.preventDefault();
  };

  // add an age, name
  // htmlFor is how you assign 'For' in JSX, it's for screenreaders
  return (
    <Card className={classes.input}>
      {/* The info below will be output in/on the Card. props.children in Card */}
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
