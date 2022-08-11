import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PriceTable from "./PriceTable";
import SearchBar from "./SearchBar";

function App() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Take search bar input and search coingecko for prices last 7 days
  const onSearch = async (searchText) => {
    // create array of dates of last 7 days
    const pastSevenDays = [...Array(7).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date;
    });

    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=7&interval=daily`)
      .then((response) => {

        // map date and prices to tableRows array
        const tableRows = pastSevenDays.map((day, index) => {
          return [day, response.data.prices[index][1]];
        });

        console.log("tableRows: ", tableRows);

        setRows(tableRows);
      })
      .catch((error) => {
        console.log("error:", error)
      });
  };


  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <h1>
        7-Day Price History of Bitcoin to CAD
      </h1>
      <p>
        Compare the price and changes of Bitcoin to CAD for the week.
      </p>
      <PriceTable searchText={searchText} setSearchText={setSearchText} rows={rows} coin="BTC" />
    </div>
  );
}

export default App;
