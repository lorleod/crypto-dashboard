import React from 'react';
import TableRow from "./TableRow";

export default function PriceTable (props) {

  // console.log("PriceTable props.rows: ", props.rows);

  let rowsArray = [];
  if (props.rows) {
    const rowsArray = props.rows.map((row) => {
      // console.log("row[0]", row[0]);
      return (
        <TableRow
          key={row[0]}
          date={row[0]}
          price={row[1]}
        />
      );
    });
  };

  // console.log("PriceTable rowsArray: ", rowsArray);

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