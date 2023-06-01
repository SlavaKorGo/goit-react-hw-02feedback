import React, { Component } from "react";
import Controls from "./Controls";

class Counter extends Component {
    static defaultProps = {
    initialValue: 0,
    }; 

   state = {
    goodValue: this.props.initialValue,
    neutralValue: this.props.initialValue,
    badValue: this.props.initialValue,
   }; 

   handleGoodIncrement = () => {
    this.setState((prevState) => ({
      goodValue: prevState.goodValue + 1,
    }));
  };

  handleNeutralIncrement = () => {
    this.setState((prevState) => ({
      neutralValue: prevState.neutralValue + 1,
    }));
  };

  handleBadIncrement = () => {
    this.setState((prevState) => ({
      badValue: prevState.badValue + 1,
    }));
  };

    render() {
        return (
          <div>
<Controls onGood={this.handleGoodIncrement}
          onNeutral={this.handleNeutralIncrement}
          onBad={this.handleBadIncrement}
          goodValue={this.state.goodValue}
          neutralValue={this.state.neutralValue}
          badValue={this.state.badValue} />
          </div>
        );
      }
}

export default Counter;

