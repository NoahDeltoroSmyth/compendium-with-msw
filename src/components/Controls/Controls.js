import React from 'react';

const Controls = ({ query, setQuery, setLoading, status, setStatus }) => {
  return (
    <>
      <form>
        <input
          aria-label="search"
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setLoading(true)}>Search</button>
      </form>
      <select aria-label="dropdown" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Deceased">Deceased</option>
        <option value="Presumed dead">???</option>
      </select>
    </>
  );
};
export default Controls;
