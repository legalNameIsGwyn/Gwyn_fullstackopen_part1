// import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const handleGood = () => {
//     setGood(good + 1)
//   }

//   const handleNeutral = () => {
//     setNeutral(neutral + 1)
//   }

//   const handleBad = () => {
//     setBad(bad + 1)
//   }

//   return (
//     <>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGood} name="good"/>
//       <Button handleClick={handleNeutral} name="neutral"/>
//       <Button handleClick={handleBad} name="bad"/>
//       <h1>Statistics</h1>
//       <Statistics good={good} neutral={neutral} bad={bad}/>
//     </>
//   )
// }

// const Button = ({name, handleClick}) => {
//   return(
//     <button onClick={handleClick}>{name}</button>
//   )
// }

// const Statistics = ({good, neutral, bad}) => {
//   const all = good + bad + neutral
//   const avg = ((good - bad) / all) || 0
//   const pos = (good / all * 100 ) || 0

//   if (all === 0 )
//     return <p>No feedback given</p>
//   else
//     return(
//       <>
//         <table>
//           <tbody>
//             <tr><StatisticLine text="good" value={good}/></tr>
//             <tr><StatisticLine text="neutral" value={neutral}/></tr>
//             <tr><StatisticLine text="bad" value={bad}/></tr>
//             <tr><StatisticLine text="all" value={all}/></tr>
//             <tr><StatisticLine text="average" value={avg}/></tr>
//             <tr><StatisticLine text="positive" value={pos}/></tr>
//           </tbody>
//         </table>
//       </>
//   )
// }

// const StatisticLine = ({text, value}) => {
  
//   return(
//     <>
//     <td>{text}</td>
//     <td>{value}</td>
//     </>
//   )
// }

// export default App

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleNewAnec = () => {
    let rand = Math.floor(Math.random() * anecdotes.length - 1) + 1
    setSelected(rand)
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]}/>
      <button onClick={() => handleNewAnec()}>
        next anaecdote
      </button>
    </div>
  )
}

const Anecdote = ({anecdote}) => {
  return ( 
    <p>
      {anecdote}
    </p>
   );
}
 

export default App