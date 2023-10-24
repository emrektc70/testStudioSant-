import React, { useEffect, useState } from 'react';
import LeftHome from '../LeftHome';
import RightHome from '../RightHome';
import styles from './styles.module.scss';

type Props = {};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
};

const View: React.FC<Props> = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
      }
      const data = await response.json();
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <LeftHome users={users} />
        <RightHome />
      </div>
    </div>
  );
};

export default View;
