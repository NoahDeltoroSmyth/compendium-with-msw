const fetchBreakingBad = async () => {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters?`);
  const characterData = await resp.json();
  return characterData;
};
export default fetchBreakingBad;

// export async function fetchBreakingBad(query) {
//   const params = new URLSearchParams();
//   params.set('characters', query);

//   const resp = await fetch(`https://www.breakingbadapi.com/api/characters?`);
//   const characterData = await resp.json();
//   return characterData;
// }
