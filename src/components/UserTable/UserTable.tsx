import React from 'react';
import { TableContainer, StyledTable, TableHeader, TableRow, TableCell } from './UserTable.styles';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Age</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default UserTable;
