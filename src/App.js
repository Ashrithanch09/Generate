import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.jsonkeeper.com/b/COZC")
      const fetchedData = await response.json()
      setData(fetchedData)
      console.log(fetchedData)
    }

    fetchData()
  }, []) 

  return (
    <div className="App">
      This is starting project
    </div>
  );
}

export default App;
