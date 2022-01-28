const fetchBreakingBad = async () => {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const characterData = await resp.json();
  // this is to fix github CI
  return characterData;
};
export default fetchBreakingBad;
