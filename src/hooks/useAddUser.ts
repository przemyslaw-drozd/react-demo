import { useState } from 'react';
import usersData from '../mock/users.json';

interface User {
  name: string;
  email: string;
}

export const useAddUser = () => {
  const [users, setUsers] = useState<User[]>(usersData);

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return { users, addUser };
};
