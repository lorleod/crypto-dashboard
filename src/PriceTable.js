import React from 'react';
import TableRow from "./TableRow";

export default function PriceTable (props) {

  console.log("PriceTable props.rows: ", props.rows);

  const rowsArray = props.rows.map((row) => {
    console.log("row.date", row.date);
    return (
      <TableRow
        key={row.date}
        date={row.date}
        price={row.price}
      />
    );
  });

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