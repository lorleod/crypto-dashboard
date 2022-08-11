import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=06-08-2021&localization=false`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error:", error)
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
