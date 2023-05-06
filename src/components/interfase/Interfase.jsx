import { Component } from "react";
export class Interfas extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
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
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    )
  }
}