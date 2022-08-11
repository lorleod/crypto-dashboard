import React from 'react';
import TableRow from "./TableRow";

export default function PriceTable (props) {

  console.log("PriceTable props.rows: ", props.rows);

  let exampleRows = [["today", 123], ["Tue Aug 09 2022", 120], ["Weds Aug 08 2022", 119]];

  let rowsArray = [];

  if (props.rows) {
    rowsArray = props.rows.map((row) => {
      // console.log("row[0]", row[0]);
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
    // console.log("PriceTableddd rowsArray: ", rowsArray);
  };

  // console.log("PriceTable rowsArray: ", rowsArray);

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