import React from 'react';

export default function Body() {
  return (
    <div>
      <select className="jersey-picker">
        {' '}
        Select A Body
        <option value="curry-jersey">Steph Curry</option>
        <option value="durant-jersey">Kevin Durant</option>
        <option value="shaq-jersey">Shaquille Oneal</option>
      </select>
    </div>
  );
}
