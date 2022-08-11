import React from 'react';
import TableRow from "./TableRow";

export default function PriceTable (props) {

  console.log("PriceTable props.rows: ", props.rows);
  const rowsArray = props.rows.map((row) => {
    return (
      <TableRow
        key={row.date}
        date={row.date}
        price={row.price}
      />
    );
  });

  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Price</th>
      </tr>
      {rowsArray}
    </table>
  );
}