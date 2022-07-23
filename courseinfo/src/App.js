const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} number={props.parts[0].exercises} />
      <Part name={props.parts[1].name} number={props.parts[1].exercises} />
      <Part name={props.parts[2].name} number={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.number}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.total}
    </div>
  )
}

function App() {
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
      <Header course={course.name} />
      <p>
        <Content parts={course.parts} />
      </p>
      <p>
        <Total parts={course.parts} />
      </p>
    </div>
  );
}

export default App;
