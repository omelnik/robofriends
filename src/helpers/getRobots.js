const USERS_API = 'https://jsonplaceholder.typicode.com/users';

export const getRobots = async () => {
  const response = await fetch(USERS_API);
  return response.json();
};

export const getUsers = async (fetch) => {
  const response = await fetch(USERS_API);
  return response.json();
};

export const addNumbers = (n1, n2) => n1 + n2;
