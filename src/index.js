/* eslint-disable import/extensions */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reducers from './reducers.js';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  // window.devToolsExtension ? window.devToolsExtension() : undefined

));
// 用 Router 组件代替 App 作为根组件
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
