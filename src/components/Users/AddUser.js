/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  // Beginning state is 'no input'/empty string bc the form starts as blank
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  // empty because there's no initial "state"
  // the 'error' stores the latest state as a snapshot. We can use it in <ErrorModal> below to make it render
  const [error, setError] = useState();

  // add function/handler for what to do when you submit the information
  const addUserHandler = (event) => {
    // prevents the default, which is that a request is sent and the page reloads
    event.preventDefault();
    // make sure theres correct info added - something typed, isnt empty (the 0)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // managing the error as an object
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      });
      return;
    }
    // enteredAge is actually a string, force a conversion to a number with the +
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    // enteredUsername and enteredAge forwards this info to the App component
    props.onAddUser(enteredUsername, enteredAge);
    // setting these back to an empty string and adding the current state to value in the return statement
    // empties the form after clicking/submitting AddUser
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    // event.target.value gets the input added to the username textbox
    setEnteredUsername(event.target.value);
  };

  // Need to be able to dismiss error modal, is pointed to by onConfirm below
  const errorHandler = () => {
    // sets error to a falsy value, so ErrorModal won't render
    setError(null);
  };

  const ageChangeHandler = (event) => {
    // event.target.value gets the input added to the age textbox
    setEnteredAge(event.target.value);
  };

  // add an age, name
  // htmlFor is how you assign 'For' in JSX, it's for screenreaders
  return (
    <div>
      {/* error checks if there is in fact an error "state", if so, it renders the ErrorModal */}
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        {/* The info below will be output in/on the Card. props.children in Card */}
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
