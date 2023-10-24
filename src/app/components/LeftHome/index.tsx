import React, { useState } from 'react';
import styles from './styles.module.scss';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
};

type Props = {
  users: User[];
  selectedUsers: User[];
  handleUserSelect: (user: User) => void
};


const LeftHome: React.FC<Props> = ({ users, selectedUsers, handleUserSelect }) => {

  return (
    <div className={styles.left}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Liste des utilisateurs :</h2>
        <ul className={styles.userList}>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <input
                type="checkbox"
                checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                onChange={() => handleUserSelect(user)}
              />
              {user.firstName} {user.lastName}
              <span>Age: {user.age}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftHome;
