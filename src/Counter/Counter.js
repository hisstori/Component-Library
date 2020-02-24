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
      <div className="box">
      <div className="Counter">
        <button className="counts" onClick={this.decreaseCount}>-</button>
        {this.state.count}
        <button className='counts' onClick={this.increaseCount}>+</button>
      </div>
      </div>
    )
  }

}

export default Counter;