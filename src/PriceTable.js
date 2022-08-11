import React from 'react';
import TableRow from "./TableRow";

// Table of date and price information about searched coin
export default function PriceTable (props) {

  // empty array to prevent undefined errors
  let rowsArray = [];

  //if props.rows is true, then map to TableRow components
  if (props.rows) {
    rowsArray = props.rows.map((row) => {
      return (
        <TableRow
          key={row[0]}
          date={row[0]}
          price={row[1]}
          absoluteChange24hr={row[2]}
          percentChange24hr={row[3]}
        />
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>1 {props.coin} to CAD</th>
          <th>24hr Change</th>
          <th>24hr % Change</th>
        </tr>
      </thead>
      <tbody>
        {rowsArray}
      </tbody>
    </table>
  );
}