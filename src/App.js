import { useEffect } from 'react';
import { fetchBreakingBad } from './services/api';
import './App.css';

function App() {
  useEffect(() => {
    fetchBreakingBad();
  });
  return <div></div>;
}

export default App;
