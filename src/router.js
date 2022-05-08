/* eslint-disable import/extensions */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Link} from "react-router-dom";

import About from './pages/about';
import Home from './pages/home';
import Topics from './pages/topics';
import Counter from './pages/counter';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/topics',
    component: Topics,
    exact: true,
  },
  {
    path: '/counter',
    component: Counter,
    exact: true,
  },
];
