import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} name="good"/>
      <Button handleClick={handleNeutral} name="neutral"/>
      <Button handleClick={handleBad} name="bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

const Button = ({name, handleClick}) => {
  return(
    <button onClick={handleClick}>{name}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const avg = ((good - bad) / all) || 0
  const pos = (good / all * 100 ) || 0

  if (all === 0 )
    return <p>No feedback given</p>
  else
    return(
    <>
      <br/><StatisticLine text="good" value={good}/>
      <br/><StatisticLine text="neutral" value={neutral}/>
      <br/><StatisticLine text="bad" value={bad}/>
      <br/><StatisticLine text="all" value={all}/>
      <br/><StatisticLine text="average" value={avg}/>
      <br/><StatisticLine text="positive" value={pos}/> %
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <>{text} {value}</>
  )
}

export default App