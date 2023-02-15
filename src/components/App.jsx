import { useState } from 'react';

import Section from './FeedBack/Section/Section';
import FeedbackOptions from './FeedBack/FeedbackOptions/FeedbackOptions';
import Statistics from './FeedBack/Statistics/Statistics';
import Notification from './FeedBack/Notification/Notification';

import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      default:
        break;
    }
  };
  const options = ['good', 'neutral', 'bad'];
  const total = good + bad + neutral;

  const percentage = total
    ? Number(((good / total) * 100).toFixed())
    : Number(0);

  return (
    <>
      <div className={css.wrapper}>
        <Section
          title={'Please leave feedback'}
          children={
            <div className={css.buttonsBlock}>
              <FeedbackOptions options={options} onClick={handleChange} />
            </div>
          }
        />
        <Section
          title={'Statistics'}
          children={
            <>
              {total < 100 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={percentage}
                />
              ) : (
                <Notification message={'There is no feedback'} />
              )}
            </>
          }
        />
      </div>
    </>
  );
};

export default App;
