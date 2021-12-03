import React, { useState } from 'react';

export default function Shoes() {
  const [shoeCount, setShoeCount] = useState(0);

  return (
    <div>
      <select>
        {' '}
        <option value="iverson-shoes">Allen Iverson</option>
        <option value="jordan-shoes">Micheal Jordan</option>
        <option value="kobe-shoes">Kobe Bryant</option>
      </select>
    </div>
  );
}
