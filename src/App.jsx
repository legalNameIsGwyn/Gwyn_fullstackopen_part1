const Header = (props) => {
  return ( 
    <h1>{props.course.name}</h1>
   );
}

const Content = (props) => {
  let cont = props.content.parts

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
  let exerciseCount = props.content.parts[0].exercises + props.content.parts[1].exercises + props.content.parts[2].exercises
 
  return ( 
    <p>
      Number of exercises {exerciseCount}
    </p>
   );
}
 

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={course}/>
      <Total content={course}/>
    </div>
  )
}

export default App