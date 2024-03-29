export const serverUrl = 'http://localhost:3002/';

export const fetchPostsFromDatabase = async () => {
  try {
    const res = await fetch(`${serverUrl}/api/getdata`);
    const data = await res.json();
    return data.posts;
  }
  catch(err) {
    console.log(err);
  }
};
// export const fetchPostsFromDatabase = async () => {
//   const res = await fetch(`${server}/data/json/posts.json`);
//   const data = await res.json();
//   return data;
// };


export const fetchUsersFromDatabase = async () => {
  try {
    const res = await fetch(`${serverUrl}/api/getdata`);
    const data = await res.json();
    return data.users;
  }
  catch(err) {
    console.log(err);
  }
};

export const fetchLoadMapsFromDatabase = async () => {
  try {
    const res = await fetch(`${serverUrl}/api/getdata`);
    const data = await res.json();
    return data.map;
  }
  catch(err) {
    console.log(err);
  }
};
