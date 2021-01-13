import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Vote = (props) => {
    return (
        <div>
            has {props.vote > 0 ? props.vote: 0} votes
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState([])
    const max = 6

    const getRandomInt = () => {
        setSelected(Math.floor(Math.random() * Math.floor(max)))
    }

    const incrementCount = () => {
        props.votes[selected] += 1
        setVote([...props.votes])
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <Vote vote={votes[selected]}/>
            <Button handleClick={incrementCount} text='vote' />
            <Button handleClick={getRandomInt} text='next anecdote' />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(6).fill(0)

ReactDOM.render(
    <App anecdotes={anecdotes} votes={votes}/>,
    document.getElementById('root')
)
