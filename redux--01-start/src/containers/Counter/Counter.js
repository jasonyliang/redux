import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
// import * as actionTypes from "../../store/actions/actions";
import {
  increment,
  decrement,
  add,
  subtract,
  store_result,
  delete_result
} from "../../store/actions/actions";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.count} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.count)}>
          Store Result
        </button>
        <ul>
          {this.props.storeResults.map(stRlt => (
            <li
              key={stRlt.id}
              onClick={() => this.props.onDeleteResult(stRlt.id)}
            >
              {stRlt.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.counter,
    storeResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: res => dispatch(store_result(res)),
    onDeleteResult: id => dispatch(delete_result(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
