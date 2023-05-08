import { Component } from 'react';
import { StatsRend } from './Statistics';
import { ButtonsRender } from './buttons';
import { RenderSection } from './section';
import { Notification } from './Notifications';
export class Interfas extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackGiven: false,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };
  updateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      feedbackGiven: true,
    }));
  };

  updateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      feedbackGiven: true,
    }));
  };

  updateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      feedbackGiven: true,
    }));
  };

  render() {
    return (
      <RenderSection title={'Please leave feedback'}>
        <div>
          <ButtonsRender
            updateGood={this.updateGood}
            updateBad={this.updateBad}
            updateNeutral={this.updateNeutral}
          ></ButtonsRender>
          {this.state.feedbackGiven ? (
            <StatsRend
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></StatsRend>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </RenderSection>
    );
  }
}
