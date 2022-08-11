import { useEffect, useState } from 'react';
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

    // create array of dates of last 8 days
    const past8Days = [...Array(8).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date;
    });

    //Turn date objects into date strings
    const past8DateStrings = past8Days.map(date => date.toDateString());

    // getrequest to coingecko
    axios.get(`https://api.coingecko.com/api/v3/coins/${searchText}/market_chart?vs_currency=cad&days=8&interval=daily`)
      .then((response) => {

        const prices = response.data.prices;

        // map dates and prices to tableRows array
        const tableRows = past8DateStrings.map((day, index) => {

          // price rounded to 2 decimal places
          let price = (Math.round((prices[index][1] + Number.EPSILON) * 100) / 100).toFixed(2);

          //24hr change rounded to 2 decimal places
          let absoluteChange24hr = (Math.round(((prices[index][1] - prices[index + 1][1]) + Number.EPSILON) * 100) / 100).toFixed(2);

          //24hr change in percent rounded to 2 decimal places
          let percentChange24hr = (Math.round(((((prices[index][1] - prices[index + 1][1]) / prices[index + 1][1]) * 100) + Number.EPSILON) * 100) / 100).toFixed(2);

          return [day, price, absoluteChange24hr, percentChange24hr];
        });

        // remove 8th day info
        tableRows.pop();

        console.log("tableRows: ", tableRows);

        setRows(tableRows);

        console.log("rows", rows);
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
