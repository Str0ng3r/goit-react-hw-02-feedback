import propTypes from 'prop-types';
export const StatsRend = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive Feedback:{positivePercentage.toFixed(2)}%</li>
      </ul>
    </div>
  );
};
StatsRend.propTypes = {
  good:propTypes.number,
  neutral:propTypes.number,
  bad:propTypes.number,
  total:propTypes.func,
  positivePercentage:propTypes.func
}
