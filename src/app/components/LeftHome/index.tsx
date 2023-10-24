import React from 'react';
import styles from './styles.module.scss';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  // ... autres propriétés d'utilisateur
};

type Props = {
  users: User[];
};

const LeftHome: React.FC<Props> = ({ users }) => {
  return (
    <div className={styles.left}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Liste des utilisateurs :</h2>
        <ul className={styles.userList}>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <input type="checkbox" />
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default LeftHome;
