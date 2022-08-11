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

  //Take searchbar input and return coingecko coin prices last 7 days
  const onSearch = async (searchText) => {

    // create array of dates of last 7 days
    const pastSevenDays = [...Array(7).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date;
    });

    //Turn date objects into date strings
    const pastSevenDateStrings = pastSevenDays.map(date => date.toDateString());

    // getrequest to coingecko
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=7&interval=daily`)
      .then((response) => {

        // map date and prices to tableRows array
        const tableRows = pastSevenDateStrings.map((day, index) => {
          return [day, response.data.prices[index][1]];
        });

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
      {enterKeyPushed && <PriceTable rows={rows} coin="BTC" />}
    </div>
  );
}

export default App;
