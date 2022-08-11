import React from "react";

export default function TitleInfo (props) {

  return (
    <div>
      <h1>
        7-Day Price History of {props.searchText} to CAD
      </h1>
      <p>
        Compare the price and changes of {props.searchText} to CAD for the week.
      </p>
    </div>
  )
}