import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Statistics = (props) => {
    const good = props.stats[0]
    const neutral = props.stats[1]
    const bad = props.stats[2]
    const total = good.value + neutral.value + bad.value

    if (total === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    const sum = good.value - bad.value
    const avg = total > 0 ? (sum / total) : 0
    const percent = total > 0 ? (good.value / total) * 100 : 0

    return (
        <table>
            <tbody>
                <Statistic text={good.text} value={good.value} />
                <Statistic text={neutral.text} value={neutral.value} />
                <Statistic text={bad.text} value={bad.value} />
                <Statistic text='all' value={total} />
                <Statistic text='average' value={avg} />
                <Statistic text='positive' value={percent + ' %'} />
            </tbody>
        </table>
    )
}

const Statistic = (props) => {
    return (
        <tr>
            <td> {props.text} </td>
            <td> {props.value} </td>
        </tr>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header1 = 'give feedback'
    const header2 = 'statistics'

    const stats = [
        {
            text: 'good',
            value: good
        },
        {
            text: 'neutral',
            value: neutral
        },
        {
            text: 'bad',
            value: bad
        }
    ]

    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    return (
        <div>
            <Header header={header1}/>
            <Button handleClick={increaseGood} text='good' />
            <Button handleClick={increaseNeutral} text='neutral' />
            <Button handleClick={increaseBad} text='bad' />
            <Header header={header2}/>
            <Statistics stats={stats} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)