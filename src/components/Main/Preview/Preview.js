import React from 'react';

export default function Preview({ head, body, bottom }) {
  return (
    <div className="images">
      <img className="header" src={`${process.env.PUBLIC_URL}/photos/${head}.png`}></img>
      <img className="torso" src={`${process.env.PUBLIC_URL}/photos/${body}.png`}></img>
      <img className="bottom" src={`${process.env.PUBLIC_URL}/photos/${bottom}.png`}></img>
    </div>
  );
}
