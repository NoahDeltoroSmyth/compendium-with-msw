import React from 'react';

const CharactersList = ({ query, setQuery, filterCharacters }) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
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

export default CharactersList;
