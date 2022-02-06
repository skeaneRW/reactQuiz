import React from 'react'

export default function Splash(props) {
    const quizParams = props.quizParams
    const handleParamsChange = props.handleParamsChange
    return (
        <main className="mainWrapper">
            <h1 className="headingTitle">QuizTime!</h1>
            <h3 className="subHead">How do you like your trivia?</h3>
            <form>
                <fieldset>
                    <legend> number of questions </legend>
                    <input type='radio' id="5" name='numQuestions' value="5" onChange={handleParamsChange} checked={quizParams.numQuestions === "5"} />
                    <label htmlFor='numQuestions'> 5 </label>
                    <input type='radio' id="10" name='numQuestions' value="10" onChange={handleParamsChange} checked={quizParams.numQuestions === "10"} />
                    <label htmlFor='numQuestions'> 10 </label>
                    <input type='radio' id="15" name='numQuestions' value="15" onChange={handleParamsChange}  checked={quizParams.numQuestions === "15"} />
                    <label htmlFor='numQuestions'> 15 </label>
                </fieldset>

                <fieldset>
                    <legend> difficulty </legend>
                    <input type='radio' id='easy' name='difficulty' value="easy" onChange={handleParamsChange} checked={quizParams.difficulty === "easy"} />
                    <label htmlFor='difficulty'> easy </label>
                    <input type='radio' id='medium' name='difficulty' value="medium" onChange={handleParamsChange} checked={quizParams.difficulty === "medium"} />
                    <label htmlFor='difficulty'> medium </label>
                    <input type='radio' id='hard' name='difficulty' value="hard" onChange={handleParamsChange} checked={quizParams.difficulty === "hard"} />
                    <label htmlFor='difficulty'> hard </label>
                </fieldset>

                <fieldset>
                    <legend> category </legend>
                    <input type='radio' id='9' name='category' value="9" onChange={handleParamsChange} checked={quizParams.category === "9"}/>
                    <label htmlFor='category'> General Knowledge </label>
                    <input type='radio' id='15' name='category' value="15" onChange={handleParamsChange} checked={quizParams.category === "15"}/>
                    <label htmlFor='category'> Video Games </label>
                    <input type='radio' id='24' name='category' value="24" onChange={handleParamsChange} checked={quizParams.category === "24"}/>
                    <label htmlFor='category'> Politics  </label>

                    <input type='radio' id='17' name='category' value="17" onChange={handleParamsChange} checked={quizParams.category === "17"}/>
                    <label htmlFor='category'> Science & Nature </label>
                    <input type='radio' id='21' name='category' value="21" onChange={handleParamsChange} checked={quizParams.category === "21"}/>
                    <label htmlFor='category'> Sports </label>
                    <input type='radio' id='11' name='category' value="11" onChange={handleParamsChange} checked={quizParams.category === "11"}/>
                    <label htmlFor='category'> Film  </label>
                </fieldset>
                <br/>
            </form>
            <button className="startGame" onClick={props.handleClick}>Start Quiz</button>
        </main>
    )
}