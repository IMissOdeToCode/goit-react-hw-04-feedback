import PropTypes from 'prop-types';

import css from './FeedBack.module.css';

const Section = ({ title, children }) => (
  <>
    <div className={css.section}>
      <p className={css.sectionTitle}>{title}</p>
      {children}
    </div>
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
