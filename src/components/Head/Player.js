import React from 'react';
import './Player.css';

export default function Player(props) {
  return (
    <div className="selector">
      {' '}
      <select onChange className="head-picker">
        <option value="chris-paul">Chris Paul</option>
        <option value="lebron-james">Lebron James</option>
        <option value="jason-kidd">Jason Kidd</option>
      </select>
      <select className="body-picker">
        {' '}
        Select A Body
        <option value="curry-body">Steph Curry</option>
        <option value="durant-body">Kevin Durant</option>
        <option value="shaq-body">Shaquille Oneal</option>
      </select>
      <select value="shoe-picker">
        {' '}
        hello
        <option value="iverson-shoes">Allen Iverson</option>
        <option value="jordan-shoes">Micheal Jordan</option>
        <option value="kobe-shoes">Kobe Bryant</option>
      </select>
    </div>
  );
}
