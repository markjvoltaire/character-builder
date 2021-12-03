import React from 'react';
import './Head.css';

export default function Head() {
  return (
    <div className="selector">
      {' '}
      <select>
        <option value="chris-paul">Chris Paul</option>
        <option value="lebron-james">Lebron James</option>
        <option value="jason-kidd">Jason Kidd</option>
      </select>
    </div>
  );
}
