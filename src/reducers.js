import { combineReducers } from 'redux';
// eslint-disable-next-line
import { counterReduce } from './redux/counter.redux.js';

export default combineReducers({
  counterReduce,
});
