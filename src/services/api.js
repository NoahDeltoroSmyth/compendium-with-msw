export const fetchBreakingBad = async () => {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const characterData = await resp.json();
  return characterData;
};
