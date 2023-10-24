// api.ts

const apiUrl = "https://dummyjson.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs");
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error(error);
    return [];
  }
};
