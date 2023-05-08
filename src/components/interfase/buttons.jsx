import propTypes from 'prop-types';

export const ButtonsRender = ({updateGood,updateNeutral,updateBad}) => {
    return (
        <ul>
          <li><button onClick={updateGood}>Good</button></li>
          <li><button onClick={updateNeutral}>Neutral</button></li>
          <li><button onClick={updateBad}>Bad</button></li>
        </ul>
    )
}

ButtonsRender.propTypes = {
  updateGood:propTypes.func,
  updateBad:propTypes.func,
  updateNeutral:propTypes.func
}
