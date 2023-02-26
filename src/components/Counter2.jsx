import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

// Method 1:
// class Counter2 extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.props.decrement()}>-</button>
//         <span>{this.props.count}</span>
//         <button onClick={() => this.props.increment()}>+</button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//     count: state.counter.value,
//     name: state.counter.name
// });

// export default connect(mapStateToProps, {increment, decrement})(Counter2);

// Method 2:
class Counter2 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch(decrement())}>-</button>
                <span>{this.props.count}</span>
                <button onClick={() => this.props.dispatch(increment())}>+</button>
            </div>
        )
    }
}
  
const mapStateToProps = (state) => ({
    count: state.counter.value,
    name: state.counter.name
});
  
export default connect(mapStateToProps)(Counter2);
