"use client"

import React, { useState, useEffect } from 'react';
import About from '../components/About';

async function getUser() {
  const apiUrl = "https://dummyjson.com/users";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const users = await response.json();
    console.log(users)
    return users.users;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    throw error;
  }
}

export default function Homepage() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: User[] = await getUser();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <main>
      <About users={users || []} />
    </main>
  );
}
