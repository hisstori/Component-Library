import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={this.decreaseCount}>-</button>
        {this.state.count}
        <button onClick={this.increaseCount}>+</button>
      </div>
    )
  }

}

export default Counter;