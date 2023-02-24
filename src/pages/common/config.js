const server = 'http://localhost:3000';

export const fetchPostsFromDatabase = async () => {
  const res = await fetch(`${server}/data/json/posts.json`);
  const data = await res.json();
  return data;
};

export const fetchUsersFromDatabase = async () => {
  const res = await fetch(`${server}/data/json/users.json`);
  const data = await res.json();
  return data;
};

export const fetchLoadMapsFromDatabase = async () => {
  const res = await fetch(`${server}/data/json/loadmap.json`);
  const data = await res.json();
  return data;
};
