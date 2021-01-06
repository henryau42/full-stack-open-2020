import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  const parts1 = props.course.parts[0]
  const parts2 = props.course.parts[1]
  const parts3 = props.course.parts[2]

  return (
    <>
      <Part part={parts1.name} exercise={parts1.exercises} />
      <Part part={parts2.name} exercise={parts2.exercises} />
      <Part part={parts3.name} exercise={parts3.exercises} />
    </>
  )
}

const Total = (props) => {
  const exercises1 = props.course.parts[0].exercises
  const exercises2 = props.course.parts[1].exercises
  const exercises3 = props.course.parts[2].exercises

  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))