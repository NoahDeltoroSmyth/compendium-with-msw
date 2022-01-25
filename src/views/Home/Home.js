import React, { useEffect, useState } from 'react';
import Characters from '../../components/CharacterList';
import { fetchBreakingBad } from '../../services/api';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
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

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <Characters {...{ characters }} />
    </div>
  );
};

export default Home;
