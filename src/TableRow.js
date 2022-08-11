import React from 'react';

// one row of data for price table
export default function TableRow (props) {

  return (
    <tr>
      <th>{props.date}</th>
      <th>${props.price}</th>
      <th>${props.absoluteChange24hr}</th>
      <th>{props.percentChange24hr}%</th>
    </tr>
  );
}