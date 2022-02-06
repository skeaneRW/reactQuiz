import React from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz';
import {nanoid} from 'nanoid';

export default function App() {
    const [gameOn, setGameOn] = React.useState(false)
    const [completed, setCompleted] = React.useState(false)
    const [quizItems, setQuizItems] = React.useState([])
    const [quizParams, setQuizParams] = React.useState({
        numQuestions: '5',
        difficulty: 'easy',
        category: '9'
    })

    const handleParamsChange = (event) => {
        const {name, value, type} = event.target
        setQuizParams(prevParams => {
            return {
                ...prevParams,
                [name]: value
            }
        })
    }

    React.useEffect(() => {
        async function getQuizItems() {
            // fetch quiz Questions from url
            const res = await fetch(`https://opentdb.com/api.php?amount=${quizParams.numQuestions}&category=${quizParams.category}&difficulty=${quizParams.difficulty}`)
            const data = await res.json()
            setQuizItems(data.results)
        }
        getQuizItems()
    }, [quizParams])


    function isChosen(answer, selection, id) {
        setQuizItems(prev => prev.map(obj => {
            if (obj.id === id && answer === selection) {
                return ({...obj, isCorrect: true, selectedAnswer: selection})
            } if (obj.id === id && answer !== selection) {
                return ({...obj, isCorrect: false, selectedAnswer: selection})
            } else {
                return ({...obj})
            }
        }))

        // setQuizItems(quizItem => quizItem.map(line => {
        //    return {
        //        ...line,
        //        selectedAnswer: selection
        //    }
        // }))


    }

    const questions = quizItems.map(line =>
        <Quiz
            key={line.id}
            quizMaterial={line}
            isChosen={(ans,selection,id) => isChosen(ans,selection,id)}
            convert={(str) => decodeCharEnt(str)}
            completed={completed}
        />
    )

    const toggleGameOn = () => {
        quizParams.numQuestions &&
        setGameOn(prevGameOn => !prevGameOn)
        //update quizItems Object to include additional properties (e.g. key, array of all possible answers)
        setQuizItems(prev => prev.map(obj => {
            return {
                ...obj,
                possible_answers: [...obj.incorrect_answers, obj.correct_answer],
                isCorrect: false,
                selectedAnswer: null,
                id: nanoid()
            }
        }))
    }

    const toggleCompleted = () => setCompleted(true)

    const resetGame = () => {
        setCompleted(false)
        setQuizParams({
            numQuestions: '5',
            difficulty: 'easy',
            category: '9'
        })
        toggleGameOn()
    }

    const decodeCharEnt = (str) => {
        const htmlEnts = [
            { entity: "&quot;", value: '"'},
            { entity: "&ouml;", value: "ö"},
            { entity: "&#039;", value: "'"},
            { entity: "&deg;", value: "°"},
            { entity: "&eacute;", value: "é"},
            { entity: "&lsquo;", value: "'"},
            { entity: "&amp;", value: "&"},
            { entity: "&rsquo;", value: "'"},
            { entity: "&uacute;", value: "'"},
            { entity: "&uml;", value: "u"},
            { entity: "&lrm;", value: ""},
            { entity: "&shy;", value: "-"}
        ]
        let result = str
        htmlEnts.forEach(obj => result = result.replaceAll(obj.entity, obj.value) )
        return result
    }

    return (
        <div className="bodyWrapper">
            {/*<p>{JSON.stringify(quizItems[0].hasOwnProperty('id'))}</p>*/}
            {!gameOn
                ? <Splash handleClick={toggleGameOn} handleParamsChange={handleParamsChange} quizParams={quizParams}/>
                : questions }
            {gameOn &&
                <div className="resultsDiv">
                    {!completed && <button className="answerButton" onClick={toggleCompleted}>Submit</button>}
                    {completed &&
                    <div className="gameResults">
                        <h1>{`Your Score ${(quizItems.filter(obj => obj.isCorrect)).length} / ${quizItems.length}`}</h1>
                        <button className="answerButton" onClick={resetGame}>Play Again</button>
                    </div>
                    }
                </div>
            }
        </div>
    )
}
