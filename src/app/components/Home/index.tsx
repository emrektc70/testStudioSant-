"use client"
import React, { useEffect, useState } from 'react';
import LeftHome from '../LeftHome';
import RightHome from '../RightHome';
import styles from './styles.module.scss';
import { getUsers } from '@/app/api/getUser';

type Props = {};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  birthDate: string;
  phone: string;
  image: string;
  username: string
};

const View: React.FC<Props> = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [totalAge, setTotalAge] = useState<number | null>(null);

  useEffect(() => {
    const selectedUsersCount = selectedUsers.length;
    const totalAge = selectedUsers.reduce((total, u) => total + u.age, 0);
    const newAverageAge = selectedUsersCount > 0 ? totalAge / selectedUsersCount : null;
    setTotalAge(newAverageAge);
    if (typeof document !== 'undefined') {
      const someElement = document.getElementById('yourElementId');
      if (someElement) {
      }
    }
  }, [selectedUsers]);

  const handleUserSelect = (user: User) => {
    if (selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleDeselectAll = () => {
    setSelectedUsers([]);
  };

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <LeftHome users={users} selectedUsers={selectedUsers} handleUserSelect={handleUserSelect} handleDeselectAll={handleDeselectAll} />
        <RightHome totalAge={totalAge} selectedUsers={selectedUsers} />
      </div>
    </div>
  );
};

export default View;
