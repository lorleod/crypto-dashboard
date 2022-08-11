import React from 'react';
import TableRow from "./TableRow";

export default function PriceTable (props) {

  // console.log("PriceTable props.rows: ", props.rows);

  let exampleRows = [["today", 123], ["Tuesday", 120], ["monday", 119]];

  let rowsArray = [];

  if (props.rows) {
    rowsArray = exampleRows.map((row) => {
      // console.log("row[0]", row[0]);
      return (
        <TableRow
          key={row[0]}
          date={row[0]}
          price={row[1]}
        />
      );
    });
    console.log("PriceTableddd rowsArray: ", rowsArray);
  };

  console.log("PriceTable rowsArray: ", rowsArray);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rowsArray}
      </tbody>
    </table>
  );
}