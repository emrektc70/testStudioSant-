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

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [totalAge, setTotalAge] = useState<number>(0);

  const handleUserSelect = (user: User) => {
    if (selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
      setTotalAge(totalAge - user.age);
    } else {
      setSelectedUsers([...selectedUsers, user]);
      setTotalAge(totalAge + user.age);
    }
  };
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <LeftHome users={users} selectedUsers={selectedUsers} handleUserSelect={handleUserSelect} />
        <RightHome totalAge={totalAge} />
      </div>
    </div>
  );
};

export default View;
