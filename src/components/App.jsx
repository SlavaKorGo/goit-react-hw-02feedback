

import React, { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";
import Notification from "./Feedback/Notification";

export class App extends Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  handleIncrement = (options) => {
    this.setState((prevState) => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.goodValue + this.state.neutralValue + this.state.badValue;
  }
  
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.goodValue / this.countTotalFeedback()) * 100);
  }

  render() {
    const { goodValue, neutralValue, badValue } = this.state;

    return (
      <div className="counter">
        <FeedbackOptions
          onGood={() => this.handleIncrement("goodValue")}
          onNeutral={() => this.handleIncrement("neutralValue")}
          onBad={() => this.handleIncrement("badValue")}
        />
        {this.countTotalFeedback() !== 0 && (
          <Statistics
            goodValue={goodValue}
            neutralValue={neutralValue}
            badValue={badValue}
            onTotal={this.countTotalFeedback()}
            onPositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}
        {this.countTotalFeedback() === 0 && (
          <Notification message={"There is no feedback"} />
        )}
      </div>
    );
  }
}


