/* eslint-disable no-restricted-globals */
import React from 'react';

const AddUser = (props) => {
  // add function/handler for what to do when you submit the information
  const addUserHandler = () => {
    // prevents the default, which is that a request is sent and the page reloads
    event.preventDefault()
  }

  // add an age, name
  // htmlFor is how you assign 'For' in JSX, it's for screenreaders
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' />
      <label htmlFor='age'>Age (Years)</label>
      <input id='age' type='number' />
      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddUser;
