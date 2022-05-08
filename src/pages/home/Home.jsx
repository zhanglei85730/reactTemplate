import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <ul>
      <li>
          <Link to="/about">About</Link>
      </li>
      <li>
        <Link
          to="/topics"
        >
          Topics
        </Link>
      </li>
      <li>
        <Link to="/counter">counter</Link>
      </li>
    </ul>
  </div>
);

export default Home;
