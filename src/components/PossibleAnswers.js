import React from 'react'

export default function PossibleAnswers(props) {
    const convert = props.convert
    const {value, correct_answer, selectedAnswer, completed} = props
    const styleWhilePlaying = {
        backgroundColor: selectedAnswer === value ? '#4D5B9E' : 'white',
        color: selectedAnswer === value ? 'white' : '#4D5B9E'
    }
    const styleWhenDone = {
        backgroundColor: selectedAnswer === value ?
            (value === correct_answer) ? '#9ac97b' : '#d68b92' :
            (value === correct_answer) ? '#9ac97b' : '#FFF',
    }
    console.log(`isCompleted: ${completed}`)
    return (
        <div className="answerWrapper">
            <button className="answerButton" style={(completed)?styleWhenDone:styleWhilePlaying} onClick={!completed && props.isChosen}> {convert(value)} </button>
        </div>
    )
}