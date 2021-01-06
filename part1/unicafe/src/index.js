import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Content = (props) => {
    const parts1 = props.parts[0]
    const parts2 = props.parts[1]
    const parts3 = props.parts[2]

    return (
        <div>
            <Part part={parts1.feedback} count={parts1.count} />
            <Part part={parts2.feedback} count={parts2.count} />
            <Part part={parts3.feedback} count={parts3.count} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.part} {props.count}
        </div>
    )
}

const Button = (props) => {

    return (
        <button>
            {props.text}
        </button>
    )
}

// const Button = ({ onClick, text }) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header1 = 'give feedback'
    const header2 = 'statistics'


    const parts = [
        {
            feedback: 'good',
            count: 6
        },
        {
            feedback: 'neutral',
            count: 2
        },
        {
            feedback: 'bad',
            count: 1
        }
    ]

    const handleClick = () => {

    }

    return (
        <div>
            <Header header={header1}/>
            <Button text={"good"}/>
            <Button text={"neutral"}/>
            <Button text={"bad"}/>
            <Header header={header2}/>
            <Content parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)