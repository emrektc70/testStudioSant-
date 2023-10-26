"use client"

import React, { useState, useEffect } from 'react';
import { getUser } from '../api/v2GetUser';
import Home from '../components/About';


export default function Homepage() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: User[] = await getUser();
        setUsers(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <main>
      <Home users={users || []} />
    </main>
  );
}
