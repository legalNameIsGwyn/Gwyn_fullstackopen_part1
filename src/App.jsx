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
      <h1>Statistics</h1>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/> 
      all {all}<br/>
      average {avg}<br/>
      positive {pos} %<br/>
    </>
  )
}


export default App