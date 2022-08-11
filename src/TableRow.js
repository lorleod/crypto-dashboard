import React from 'react';

export default function TableRow (props) {

  return (
    <tr>
      <th>{props.date}</th>
      <th>{props.price}</th>
    </tr>
  );
}