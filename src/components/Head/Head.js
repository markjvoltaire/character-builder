import React from 'react';
import './Head.css';
import { useState } from 'react';

export default function Head() {
  const [head, setHead] = useState('head');
  const [headCount, setHeadCount] = useState(0);

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
