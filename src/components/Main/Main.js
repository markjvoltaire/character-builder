import React from 'react';
import { useState } from 'react';
import Preview from './Preview/Preview';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue-torso');
  const [bottom, setBottom] = useState('blue-bottom');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  const incrementHeadCount = () => {
    setHeadCount(headCount + 1);
  };

  const incrementBodyCount = () => {
    setBodyCount(bodyCount + 1);
  };

  const incrementBottomCount = () => {
    setBottomCount(bottomCount + 1);
  };

  return (
    <div className="selectors">
      <div className="head-selectors">
        <select
          onClick={incrementHeadCount}
          value={head}
          onChange={(e) => setHead(e.target.value)}
          className="heads"
        >
          <div></div>
          <option value="bird">birddie</option>
          <option value="dog">Spike</option>
          <option value="duck">Aflac Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>

      <div className="body-selectors">
        <select
          onClick={incrementBodyCount}
          value={body}
          className="torsos"
          onChange={(e) => setBody(e.target.value)}
        >
          <option value="blue-torso">Blue Torso</option>
          <option value="dress-torso">Dress</option>
          <option value="pink-torso">Pink Torso</option>
          <option value="red-torso">Red Torso</option>
        </select>
      </div>

      <div className="bottom-selectors">
        <select
          onClick={incrementBottomCount}
          value={bottom}
          onChange={(e) => setBottom(e.target.value)}
          className="bottoms"
        >
          <option value="blue-bottom">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="leg-bottom">A Leg</option>
          <option value="white-bottom">White Pants</option>
        </select>

        <div>
          <p className="results">
            {' '}
            You have changed the head:{headCount} times, the body:{bodyCount} times, and the pants:
            {bottomCount} times. And nobody can forget your characters classic catchphrases:
          </p>
        </div>
      </div>
      <Preview head={head} body={body} bottom={bottom} />
    </div>
  );
}
