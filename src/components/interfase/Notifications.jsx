import propTypes from 'prop-types';
export const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};
Notification.propTypes ={
    message:propTypes.string
}
