import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import fetchBreakingBad from '../../services/api';
import './Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreakingBad();
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filterCharacters = characters.filter(
    (character) => character.name.toLowerCase().includes(query) || character.name.includes(query)
  );

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <CharacterList {...{ query, setQuery, filterCharacters }} />
    </div>
  );
}

export default Home;
