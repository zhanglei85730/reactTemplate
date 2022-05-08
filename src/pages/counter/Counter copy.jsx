
import React from 'react';
import { connect } from 'react-redux';
import { counterReduce, increment, decrement } from "../../redux/counter.redux";

// @connect(state => {
//   return state.counterReduce
// },
//   {
//     increment,
//     decrement,
//   })
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  decream() {
    this.props.increment()
  }
  decrease() {
    this.props.decrement()
  }

  render() {
      return (
      <div>
        <p>{this.props.counter.result}</p>
        <div><button onClick={this.decream.bind(this)}>增加</button></div>
        <div><button onClick={this.decrease.bind(this)}>减少</button></div>
      </div>
    )
  }
}
// 非装饰器写法
const mapStateToProps = (state)=>{
  return {
      counter:state.counterReduce
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    increment:() =>{
          dispatch(increment());
      },
      decrement:() => {
          dispatch(decrement());
      }
  }
}
/////////////////////////////
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
// export default Counter