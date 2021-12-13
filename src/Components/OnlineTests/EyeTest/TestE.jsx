import React, { useState } from 'react';
import s from "./EyeTest.module.css";
import pic1 from "./1 (1).png";
import pic2 from "./2 (1).png";
import pic3 from "./3 (1).png";
import pic4 from "./4.png";
import pic5 from "./5.png";
import pic6 from "./6.png";
import pic7 from "./7.png";
import pic8 from "./8.png";
import pictip2 from "./advice_dontach.png";
import pictip3 from "./advice_manypeoples.png";
import pictip4 from "./advice_stayhome.png";


export default function TestE() {
    const questions = [
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic1,
            answerOptions: [
                { answerText: '76', isCorrect: false },
                { answerText: '14', isCorrect: false },
                { answerText: '74', isCorrect: true },
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic2,
            answerOptions: [
                { answerText: '6', isCorrect: true },
                { answerText: '9', isCorrect: false },
                { answerText: '8', isCorrect: false }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic3,
            answerOptions: [
                { answerText: '73', isCorrect: true },
                { answerText: '13', isCorrect: false },
                { answerText: '19', isCorrect: false }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic4,
            answerOptions: [
                { answerText: '13', isCorrect: false },
                { answerText: '19', isCorrect: false },
                { answerText: '16', isCorrect: true },
                { answerText: '6', isCorrect: false }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic5,
            answerOptions: [
                { answerText: '4', isCorrect: false },
                { answerText: '3', isCorrect: false },
                { answerText: '42', isCorrect: true }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic6,
            answerOptions: [
                { answerText: '26', isCorrect: true },
                { answerText: '29', isCorrect: false },
                { answerText: '2', isCorrect: false }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic7,
            answerOptions: [
                { answerText: '9', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '6', isCorrect: false }
            ],
        },
        {
            questionText: 'ДУОХРОМНЫЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ БЛИЗОРУКОСТИ (-) И ДАЛЬНОЗОРКОСТИ (+)',
            tipsText: 'СОБЛЮДАЙТЕ СЛЕДУЮЩИЕ УСЛОВИЯ, ЧТОБЫ ПОЛУЧИТЬ ОБЪЕКТИВНЫЙ РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ:',
            tips1: "Дистанция между глазами и экраном не должна быть менее 50-70 см",
            tips2: "Во время теста нельзя щуриться. Старайтесь держать голову ровно, Следите, чтобы монитор и глаза находились на одном уровне.",
            pic: pic8,
            answerOptions: [
                { answerText: '12', isCorrect: true },
                { answerText: '13', isCorrect: false },
                { answerText: '19', isCorrect: false }
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
        if (showScore <= 3) {
            unswer = 'У вас 100% зрение!';
            setUnswer = unswer;
        } else if (showScore === 0 || nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else if (showScore > 3) {

            unswer = "У вас есть признаки коронавируса, советуем пройти обследование и сходить в больницу";
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
                            <h2 className={s.textunswer}>У вас 100% зрение!</h2>
                        </div>
                    ) : (
                        <>
                        <h2 className={s.textunswer}>Зрение нуждается в обязательном обследовании.</h2>
                        <h4>Посетите врача-офтальмолога, чтобы избежать проблем со зрением.</h4>
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