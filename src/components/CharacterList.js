import React from 'react';

const CharactersList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.char_id}>
          <h3>{character.name}</h3>
          <img className="character-img" src={character.img} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
