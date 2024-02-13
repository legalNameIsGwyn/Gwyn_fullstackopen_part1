const Header = (props) => {
  return ( 
    <h1>{props.course}</h1>
   );
}

const Content = (props) => {
  let cont = props.content
  console.log(cont[0])
  return ( 
    <>
      <Part part={cont[0][0]} exercises={cont[0][1]}/>
      <Part part={cont[1][0]} exercises={cont[1][1]}/>
      <Part part={cont[2][0]} exercises={cont[2][1]}/>
    </>
   );
}

const Part = (props) => {
  return (  
    <p>
      {props.part} {props.exercises}
    </p>
  );
}
 
const Total = (props) => {
  return ( 
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
   );
}
 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3]
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total exercises1= {exercises1}
      exercises2= {exercises2}
      exercises3= {exercises3}/>
    </div>
  )
}

export default App