import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import fetchBreakingBad from '../../services/api';
import './Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreakingBad();
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const filterCharacters = characters.filter(
    (character) =>
      (character.name.toLowerCase().includes(query) || character.name.includes(query)) &&
      (character.status === status || status === 'All')
  );

  return (
    <div>
      {loading && <h1>loading...</h1>}

      <CharacterList
        {...{
          query,
          setQuery,
          filterCharacters,
          characters,
          setCharacters,
          status,
          setStatus,
          loading,
          setLoading,
        }}
      />
    </div>
  );
}

export default Home;
