'use server'

const fetchRandomUser = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();

  const user = data.results[0];

  return {
    name: user.name.first,
    lastName: user.name.last,
    picture: user.picture.large
  };
}

export { fetchRandomUser }