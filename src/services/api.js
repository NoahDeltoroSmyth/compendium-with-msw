export async function getApi() {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters  `);
  const apiData = await resp.json();
  return apiData;
}
