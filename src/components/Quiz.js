import React from 'react'
import PossibleAnswers from './PossibleAnswers';

export default function Quiz(props) {
    const convert = props.convert
    const { question, possible_answers, correct_answer, selectedAnswer, id } = props.quizMaterial
    const completed = props.completed

    const possibleAnswers = possible_answers.sort().map(answer =>
        <PossibleAnswers
            key={answer}
            convert={(str) => convert(str)}
            value={answer}
            selectedAnswer={selectedAnswer}
            correct_answer={correct_answer}
            isCorrect={props.quizMaterial.isCorrect}
            isChosen={() => props.isChosen(correct_answer, answer, id)}
            completed={completed}
        />)
    return (
        <div className="mainWrapper">
            <h1 className="quizQuestion">{ convert(question) }</h1>
            <div className="answerWrapper">
                {possibleAnswers}
            </div>
            <hr className="lineBreak"/>
        </div>
    )
}