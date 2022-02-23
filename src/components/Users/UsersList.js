import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  // One list item for every user. Will get user info in an array via props
  // The anonymous user function will return a JSX element for every user in that array we get via props
  // users from props.users.map must also be added to UsersList in App.js for the list to show
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
