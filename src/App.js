import { useState } from 'react';
import axios from 'axios';
import './App.css';
import PriceTable from "./PriceTable";
import SearchBar from "./SearchBar";
import TitleInfo from "./TitleInfo";

function App() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [enterKeyPushed, setEnterKeyPushed] = useState(false);

  //Take searchbar input and return coingecko coin prices last 8 days
  const onSearch = async (searchText) => {

    // create array of last 8 days' dates
    const past8Days = [...Array(8).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date;
    });

    //Convert date objects into date strings
    const past8DateStrings = past8Days.map(date => date.toDateString());

    // get request to coingecko with search text, then calculate and setRows data
    axios.get(`https://api.coingecko.com/api/v3/coins/${searchText}/market_chart?vs_currency=cad&days=8&interval=daily`)
      .then((response) => {

        const prices = response.data.prices;

        // map dates, prices, and 24hr changes to tableRows array
        const tableRows = past8DateStrings.map((day, index) => {

          // price from coingecko rounded to 2 decimal places
          let price = (Math.round((prices[index][1] + Number.EPSILON) * 100) / 100).toFixed(2);

          //24hr change (price today - price day before) rounded to 2 decimal places
          let absoluteChange24hr = (Math.round(((prices[index][1] - prices[index + 1][1]) + Number.EPSILON) * 100) / 100).toFixed(2);

          //24hr change in percent (24hr change / price day before * 100) rounded to 2 decimal places
          let percentChange24hr = (Math.round(((((prices[index][1] - prices[index + 1][1]) / prices[index + 1][1]) * 100) + Number.EPSILON) * 100) / 100).toFixed(2);

          return [day, price, absoluteChange24hr, percentChange24hr];
        });

        // remove 8th day data
        tableRows.pop();

        setRows(tableRows);

      })
      .catch((error) => {
        console.log("error:", error)
      });
  };

  return (
    <div className="App">
      <SearchBar searchText={searchText} setSearchText={setSearchText} setEnterKeyPushed={setEnterKeyPushed} onSearch={onSearch} />
      {enterKeyPushed && <TitleInfo searchText={searchText} />}
      {enterKeyPushed && <PriceTable rows={rows} coin={searchText} />}
    </div>
  );
}

export default App;
