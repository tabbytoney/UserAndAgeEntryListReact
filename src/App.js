import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  // This handler ets user information and updates the setUsersList
  const addUserHandler = (uName, uAge) => {
    // passing a function to setUsersList bc this state relies on the state existing before it.
    // That function will get the previous list of info and then we can add to it.
    setUsersList((prevUsersList) => {
      // ... is the spread operator that pulls out the information from that list so we can use it
      // name and age are the two parameters we get in that information (it's just a normal object)
      // An object is created for every user and is added to prevUsersList for us to use wtih a new state
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      {/* Getting user data */}
      <AddUser onAddUser={addUserHandler} />
      {/* Outputting user data */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

// To manage/render list of users, we do it here because App is one step above both AddUser and UsersList. We lift the state management
// up to App
