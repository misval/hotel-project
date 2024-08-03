'use server'

const fetchRandomUserImage = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();

  const user = data.results[0];

  return user.picture.large;
}

export { fetchRandomUserImage }