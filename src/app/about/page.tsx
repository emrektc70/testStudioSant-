import React from 'react';
import Home from '../components/Home';

export default function Homepage({ users }: { users: User[] }) {
  return (
    <div>
      <Home users={users} />
    </div>
  );
}

export async function getServerSideProps() {
  const apiUrl = "https://dummyjson.com/users";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const users: User[] = await response.json();
    const user: User = users[0];

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    throw error;
  }
}
