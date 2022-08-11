import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PriceTable from "./PriceTable";

function App() {
  const [rows, setRows] = useState([]);

  // on load, get request prices last 7 days from coingecko
  useEffect(() => {

    // create array of dates of last 7 days
    const pastSevenDays = [...Array(7).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date;
    });

    console.log("pastSevenDays: ", pastSevenDays);

    const fetchData = () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=7&interval=daily`)
        .then((response) => {
          console.log(response.data);

          const rows = pastSevenDays.map((day, index) => {
            return [day, response.data.prices[index][1]];
          });

          console.log("rows: ", rows);
          setRows(rows);

        })
        .catch((error) => {
          console.log("error:", error)
        });
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <PriceTable rows={rows} />
    </div>
  );
}

export default App;
