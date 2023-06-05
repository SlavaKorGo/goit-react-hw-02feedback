import React, { Component } from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";
import Notification from "./Notification";


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
    const { goodValue, neutralValue, badValue } = this.state;
    const totalFeedback = goodValue + neutralValue + badValue;
    const positiveFeedbackPercentage =
      totalFeedback === 0
        ? 0
        : ((goodValue / totalFeedback) * 100).toFixed(2) + '%';

    return (
      <div className= "counter"> 
        <Controls
          onGood={this.handleGoodIncrement}
          onNeutral={this.handleNeutralIncrement}
          onBad={this.handleBadIncrement}
        />
        {totalFeedback !== 0 && (
          <Statistics
            goodValue={goodValue}
            neutralValue={neutralValue}
            badValue={badValue}
            onTotal={totalFeedback}
            onPositiveFeedback={positiveFeedbackPercentage}
          />
        )}
        {totalFeedback === 0 && (<Notification
        message={"There is no feedback"}/>)}
      </div>
    );
  }
}

export default Counter;

