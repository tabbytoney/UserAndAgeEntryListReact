import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      {/* Getting user data */}
      <AddUser />
      {/* Outputting user data */}
      <UsersList users={[]} />
    </div>
  );
}

export default App;
