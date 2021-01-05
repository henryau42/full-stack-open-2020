import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} count={props.exercises1} />
            <Part part={props.part2} count={props.exercises2} />
            <Part part={props.part3} count={props.exercises3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header1 = 'give feedback'
    const header2 = 'statistics'

    const part1 = {
        feedback: 'good',
        count: 6
    }
    const part2 = {
        feedback: 'neutral',
        count: 2
    }
    const part3 = {
        feedback: 'bad',
        count: 1
    }


    return (
        <div>
            <Header header={header1}/>
            <Header header={header2}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)