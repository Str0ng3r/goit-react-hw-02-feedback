import { Component } from "react";
import { StatsRend } from "./Statistics";
export class Interfas extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100
  }
  updateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }));
  }

  updateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }));
  }

  updateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }));
  }

  render() {
    return (
      <div>
        <h2> Please leave feedback</h2>
        <ul className="">
          <li><button onClick={this.updateGood}>Good</button></li>
          <li><button onClick={this.updateNeutral}>Neutral</button></li>
          <li><button onClick={this.updateBad}>Bad</button></li>
        </ul>
        <StatsRend good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></StatsRend>
      </div>
    )
  }
}