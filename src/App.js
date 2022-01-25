import { useEffect } from 'react';
import { getApi } from './services/api';
import './App.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getApi();
      console.log(apiData);
    };
    fetchData();
  });
  return <div></div>;
}

export default App;
