import { Notification } from "./Notification";
import propTypes from 'prop-types'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <>
        <h2>Statistics</h2>
        {total ? (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  };
  Statistics.propTypes = {
    good:propTypes.string.isRequired,
    neutral:propTypes.string.isRequired,
    bad:propTypes.string.isRequired,
    total:propTypes.string.isRequired,
   positivePercentage:propTypes.string.isRequired
  }