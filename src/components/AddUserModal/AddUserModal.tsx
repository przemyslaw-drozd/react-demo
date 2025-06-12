import React, { useState } from 'react';
import { ModalOverlay, ModalContent } from './AddUserModal.styles';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  addUser: (newUser: { name: string; email: string; age: number }) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age === '') return;
    addUser({ name, email, age: Number(age) });
    setName('');
    setEmail('');
    setAge('');
    onClose();
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value === '' ? '' : Number(value));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              required
            />
          </label>
          <button type="submit">Add User</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddUserModal;
