import PropTypes from 'prop-types';

import css from './FeedBack.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.resultsBlock}>
        <p className={css.results}>Good: {good}</p>
        <p className={css.results}>Neutral: {neutral}</p>
        <p className={css.results}>Bad: {bad}</p>
      </div>

      <div className={css.resultsBlock}>
        <p className={css.results}>Total: {total}</p>
        <p className={css.results}>
          Positive feed back: {`${positivePercentage}%`}
        </p>
      </div>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
