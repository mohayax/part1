import React, {useState} from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad;
  const average = (all / 3).toFixed(1);
  const positive = ((good/(good + neutral + bad))* 100).toFixed(1);
  return (
    <>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={all} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={positive} percent={true} />
    </>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.percent ? "%" : ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    return setGood(good + 1);
  }

  const handleNeutralClick = () => {
    return setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    return setBad(bad + 1);
  }
 

  return (
    <div>
      <h1>Give feedback</h1>
        <Button 
          handleClick={handleGoodClick}
          text="Good"
        />
        <Button 
          handleClick={handleNeutralClick}
          text="neutral"
        />
        <Button 
          handleClick={handleBadClick}
          text="Bad"
        />

      <h2>Statistics</h2>
      {
        good === 0 && neutral === 0 && bad === 0 ?
        <div>
          <h2>No feedback given</h2>
        </div> :
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      }
    </div>
  );
}

export default App;
