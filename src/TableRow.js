import React from 'react';

export default function TableRow (props) {

  console.log("TableRow props.date", props.date);
  return (
    <tr>
      <th>{props.date}</th>
      <th>{props.price}</th>
    </tr>
  );
}