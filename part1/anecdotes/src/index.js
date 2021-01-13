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
    const vote = props.vote > 0 ? props.vote : 0

    return (
        <div>
            has {vote} votes
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Popular = (props) => {

    const highest = props.findMax(props.votes)

    return (
        <p>{props.anecdotes[highest]}</p>
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
        props.voteCount[selected] += 1
        setVote([...props.voteCount])
    }

    const findMax = (array) => {
        let max = 0,
            length = array.length,
            counter,
            maxIndex = 0

        for (counter=0; counter<length; counter++) {
            if (array[counter] > max) {
                max = array[counter]
                maxIndex = counter
            }
        }

        return (maxIndex)
    }

    return (
        <div>
            <Header header={'Anecdote of the day'} />
            {props.anecdotes[selected]}
            <Vote vote={votes[selected]}/>
            <Button handleClick={incrementCount} text='vote' />
            <Button handleClick={getRandomInt} text='next anecdote' />
            <Header header={'Anecdote with most votes'} />
            <Popular findMax={findMax} anecdotes={props.anecdotes} votes={votes} />
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

const voteCount = new Array(6).fill(0)

ReactDOM.render(
    <App anecdotes={anecdotes} voteCount={voteCount}/>,
    document.getElementById('root')
)
