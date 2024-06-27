import './App.css';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';

function App() {
  const [ApiData, setApiData] = useState([]);

  return (
    <>
      <SearchBar setApiData={setApiData} />
      <Card ApiData={ApiData} />
    </>
  );
}

export default App;
