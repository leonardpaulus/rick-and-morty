export async function fetchCharacters(url) {
  const randomPage = Math.floor(Math.random() * 34) + 1;
  console.log(randomPage);

  const response = await fetch(url + randomPage);
  const body = await response.json();
  const characters = body.results;

  return characters;
}
