const Header = (props) => {
  return ( 
    <h1>{props.course}</h1>
   );
}

const Content = (props) => {
  let cont = props.content
  return ( 
    <>
      <Part content={cont[0]}/>
      <Part content={cont[1]}/>
      <Part content={cont[2]}/>
    </>
   );
}

const Part = (props) => {
  return (  
    <p>
      {props.content.name} {props.content.exercises}
    </p>
  );
}
 
const Total = (props) => {
  let exerciseCount = props.content[0].exercises + props.content[1].exercises + props.content[2].exercises
 
  return ( 
    <p>
      Number of exercises {exerciseCount}
    </p>
   );
}
 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const content = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total content={content}/>
    </div>
  )
}

export default App