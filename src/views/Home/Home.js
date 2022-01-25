import React, { useEffect, useState } from 'react';
import Characters from '../../components/CharacterList';
import { fetchBreakingBad } from '../../services/api';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreakingBad();
      setCharacters(data);
      console.log('data', data);
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
      <Characters {...{ query, setQuery, filterCharacters }} />
    </div>
  );
};

export default Home;
