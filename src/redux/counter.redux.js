const INCREMENT = 'increment';
const DECREMENT = 'decrement';
// 初始状态
const initState = {
  result: 1,
};
// reduce
export function counterReduce(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { result: state.result + 1 };
    case DECREMENT:
      return { result: state.result - 1 };
    default:
      return state;
  }
}
// 同步action
export function increment() {
  return {
    type: INCREMENT,
  };
}
// 异步的action
export function decrement() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DECREMENT,
      });
    }, 1000);
  };
}
