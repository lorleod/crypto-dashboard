import React from "react";

// text field for user to input coin API ID
export default function SearchBar(props) {
  const onSearch = props.onSearch;
  const searchText = props.searchText;
  const setSearchText = props.setSearchText;
  const setEnterKeyPushed = props.setEnterKeyPushed;

  //Changes state to input field
  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  //Allows input to be submit by enter
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
      setEnterKeyPushed(true);
      onSearch(searchText);
    }
  };

  //Prevents refresh on Submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Search:</p>
      <input
        className="search-bar-input"
        type="text"
        name="coinName"
        placeholder="Search"
        onChange={handleInput}
        onKeyPress={handleEnter}
        value={searchText}
      ></input>
      <p>Push enter to search for a coin's API ID. Try "bitcoin" or "ethereum"!</p>
      <br />

    </form>

  );
}