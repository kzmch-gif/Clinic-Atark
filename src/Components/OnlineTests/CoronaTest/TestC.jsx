import React, { useState } from 'react';
import s from "./CoronaTest.module.css";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./Fever-Icon-01-01-1.png";
import pic5 from "./illustration-body-temp.png";
import pic6 from "./48546f559f3221764ad66739297633e4f0649435-2000x1400.png";
import pictip1 from "./advice_wash-hands.png";
import pictip2 from "./advice_dontach.png";
import pictip3 from "./advice_manypeoples.png";
import pictip4 from "./advice_stayhome.png";


export default function TestC() {
    const questions = [
        {
            questionText: 'Сделайте глубокий вдох и задержите дыхание более чем на 10 секунд. Что вы ощущаете?',
            pic: pic1,
            answerOptions: [
                { answerText: 'Ничего, все в норме', isCorrect: false },
                { answerText: 'Мне тяжело это сделать, чувствую боль в грудной клетке', isCorrect: true },
            ],
        },
        {
            questionText: 'Как вы себя чувствуете?',
            pic: pic2,
            answerOptions: [
                { answerText: 'Со мной все хорошо, хочу провериться', isCorrect: false },
                { answerText: 'Чувствую, что заболеваю', isCorrect: true },
                { answerText: 'Я заболел(-а)', isCorrect: true }
            ],
        },
        {
            questionText: 'За последние 14 дней вы контактировали с человеком, которому лабораторно подтвердили диагноз коронавируса?',
            pic: pic3,
            answerOptions: [
                { answerText: 'Да', isCorrect: true },
                { answerText: 'Нет', isCorrect: false },
                { answerText: 'Скорее всего нет', isCorrect: false }
            ],
        },
        {
            questionText: 'Есть ли у вас изменения вкусов и запахов? Может они полностью пропали?',
            pic: pic4,
            answerOptions: [
                { answerText: 'Вкусы не пропали, а запахов нет', isCorrect: true },
                { answerText: 'Ничего не чувствую', isCorrect: true },
                { answerText: 'Все впорядке', isCorrect: false },
                { answerText: 'Еле еле что-то слышу', isCorrect: true }
            ],
        },
        {
            questionText: 'Наблюдаете за собой головную боль с температурой больше 37,2 на протяжении нескольких дней?',
            pic: pic5,
            answerOptions: [
                { answerText: 'Температура с головной болью мучает', isCorrect: true },
                { answerText: 'Раз в пол года есть', isCorrect: false },
                { answerText: 'Все впорядке', isCorrect: false }
            ],
        },
        {
            questionText: 'Появился ли сухой кашель или боль в горле при глотании?',
            pic: pic6,
            answerOptions: [
                { answerText: 'Ничего нет', isCorrect: false },
                { answerText: 'Есть и кашель и боль', isCorrect: true },
                { answerText: 'Только периодический кашель', isCorrect: true }
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
            unswer = 'У вас нет признаков коронавируса!';
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
                    {score < 3 ? (
                        <div>
                            <h2 className={s.textunswer}>У вас нет короны</h2>
                            <h5>Мы советуем вам придерживаться некоторых правил для профилактики от заболевания:</h5>
                            <ul>

                                <li className={s.li}>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <img className={s.pictip1} src={pictip1} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className={s.h6wash}> Мойте руки</h6>
                                                    <p className={s.pwash}>Всегда мойте руки: когда приходите на работу или возвращаетесь домой. Для профилактики также подойдут влажные салфетки или дезинфицирующие растворы.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <img className={s.pictip1} src={pictip2} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className={s.h6wash}> Не трогайте лицо руками</h6>
                                                    <p className={s.pwash}>Не подносите руки к носу и глазам. Быстрее всего вирус попадает в организм через слизистую оболочку. Когда чихаете всегда прикрывайтесь платком.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={s.li}>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <img className={s.pictip1} src={pictip3} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className={s.h6wash}>Помните о необходимости соблюдать меры профилактики, как только вышли из дома</h6>
                                                    <p className={s.pwash}>Избегайте ненужных поездок и не ходите в места массового скопления людей.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <img className={s.pictip1} src={pictip4} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className={s.h6wash}>Отмените путешествия</h6>
                                                    <p className={s.pwash}>На время, пока разные страны мира борются с корона вирусом, не следует путешествовать заграницу. В особенности туда, где ситуация с коронавирусом крайне тяжелая.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    ) : (
                        <>
                        <h2 className={s.textunswer}>У вас есть подозрения на коронавирус</h2>
                        <h4>Мы советуем срочно обратится к врачу и пройти обследование во избежания осложнений</h4>
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
                        <div className='question-text mb-3'>{questions[currentQuestion].questionText}</div>
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