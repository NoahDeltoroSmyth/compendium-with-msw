import React from 'react';

const CharacterList = ({ query, characters, status }) => {
  const filterCharacters = characters.filter(
    (character) =>
      (character.name.toLowerCase().includes(query) || character.name.includes(query)) &&
      (character.status === status || status === 'All')
  );

  return (
    <>
      <div className="characters">
        {filterCharacters.map((character) => (
          <div key={character.char_id}>
            <h3>{character.name}</h3>
            <img className="character-img" src={character.img} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterList;
