import React, { useState } from 'react';
import s from "./LungTest.module.css";



export default function TestL() {
    const questions = [
        {
            questionText: 'Я постоянно кашляю',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'Мои легкие наполнены мокротой (слизью)',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'У меня очень сильное ощущение сдавления в грудной клетке',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'Когда я иду в гору или поднимаюсь вверх на один лестничный пролет, у меня возникает сильная одышка',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'Моя повседневная деятельность в пределах дома очень ограничена',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'Из-за моего заболевания легких я совсем не чувствую себя уверенно, когда выхожу из дома',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'Из-за моего заболевания легких я сплю очень плохо',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
        {
            questionText: 'У меня совсем нет энергии',
            questionmain: '0 означает никогда, то есть такого не происходит, а 5 - происходит очень часто',
            answerOptions: [
                { answerText: '0', isCorrect: false },
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    let [unswer, setUnswer] = useState('');


    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    let resUnswer = (setUnswer) => {
        const nextQuestion = currentQuestion + 1;
        if (showScore <= 14) {
            unswer = 'У вас 100% здоровые легкие!';
            setUnswer = unswer;
        } else if (showScore === 0 || nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else if (showScore > 14) {

            unswer = "У вас есть некоторые проблемы с легкими, мы советуем пройти обследование и сходить в больницу";
            setUnswer = unswer;
        }
    }



    return (
        <div className="container text-center">
            {showScore ? (
                <div className='score-section'>
                    <h5 className={"mb-3" + " h5score"}>	Вы набрали {score} из {questions.length} баллов</h5>
                    {score > 6 ? (
                        <div>
                            <h2 className={s.textunswer}>У вас 100% здоровые легкие!</h2>
                        </div>
                    ) : (
                        <>
                        <h2 className={s.textunswer}>У вас есть некоторые проблемы с легкими, мы советуем пройти обследование и сходить в больницу.</h2>
                        </>
                    )
                    }

                </div>
            ) : (


                <div>
                    <div className='question-section'>

                        <div className='question-count'>
                            <h4>Вопрос {currentQuestion + 1}/{questions.length}</h4>
                        </div>
                       
                        <div className='question-text mb-3'><h5>{questions[currentQuestion].questionText}</h5></div>
                        <p>{questions[currentQuestion].questionmain}</p>
                        <div className='question-text mb-1'>{questions[currentQuestion].tipsText}</div>
                        <div className='question-text mb-1'>{questions[currentQuestion].tips1}</div>
                        <div className='question-text mb-3'>{questions[currentQuestion].tips2}</div>
                        <img className="w-25" src={questions[currentQuestion].pic} />
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className="btn btn-outline-dark m-3" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
}