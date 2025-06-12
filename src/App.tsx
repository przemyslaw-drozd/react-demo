import React, { useState } from 'react';
import UserTable from './components/UserTable/UserTable';
import AddUserModal from './components/AddUserModal/AddUserModal';
import usersData from './mock/users.json';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>(usersData);

  const addUser = (newUser: Omit<User, 'id'>) => {
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...newUser, id }]);
  };

  return (
    <div className="App">
      <h1>User Table</h1>
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <UserTable users={users} />
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addUser={addUser} />
    </div>
  );
}

export default App;
