import PropTypes from 'prop-types';

import css from './FeedBack.module.css';

const Notification = ({ message }) => <p className={css.results}>{message}</p>;

export default Notification;

Notification.propTypes = { message: PropTypes.string.isRequired };
