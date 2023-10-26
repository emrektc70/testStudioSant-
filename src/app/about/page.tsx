import React from 'react';
import About from '../components/About';

export default function Homepage({ users }: { users: User[] }) {
  return (
    <div>
      <About users={users} />
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
