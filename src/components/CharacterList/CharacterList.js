import React from 'react';

const CharacterList = ({ query, setQuery, filterCharacters, characters, setCharacters }) => {
  return (
    <>
      <div>
        <input
          aria-label="search"
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={characters} onChange={(e) => setCharacters(e.target.value)}>
          <option value="All">All</option>
          <option value="Alive">Alive</option>
          <option value="Deceased">Deceased</option>
        </select>
      </div>
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
