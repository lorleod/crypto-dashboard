import React from "react";

export default function SearchBar(props) {
  const onSearch = props.onSearch;
  const searchText = props.searchText;
  const setSearchText = props.setSearchText;

  //Changes state to input field
  const handleInput = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  //Allows input to be submit by enter
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  };

  //Prevents refresh on Submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-bar-input"
        type="text"
        name="coinName"
        placeholder="Search"
        onChange={handleInput}
        onKeyPress={handleEnter}
        value={searchText}
      ></input>
      <br />
    </form>
  );
}