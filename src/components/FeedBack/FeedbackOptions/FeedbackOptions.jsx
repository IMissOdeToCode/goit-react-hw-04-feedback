import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return options.map(option => (
    <button
      className={css.button}
      key={option}
      name={option}
      type="button"
      onClick={onClick}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  option: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
