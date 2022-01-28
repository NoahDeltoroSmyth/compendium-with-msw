import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Controls from '../../components/Controls/Controls';
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

  return (
    <div>
      {loading && <h1>loading...</h1>}
      <Controls {...{ query, setQuery, setLoading, status, setStatus }} />
      <CharacterList
        {...{
          query,
          setQuery,
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
