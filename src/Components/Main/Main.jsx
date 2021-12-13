import React, {useState} from "react";
import corona from "./favicon.png";
import "./Main.css";
import galochka from "./galochka.png";
import krest from "./krest.png";
import imgreview from "./img-review.png";
import Slider from "../Slider/Slider";
import Accordion from "../Accordion/Accordion";


export default function Main() {
/*
    const animItems = document.querySelectorAll('._anim-items');

    if( animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++){
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 6;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if( animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    animItem.classList.remove ('_active');
                
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, 
                left: rect.left + scrollLeft
            }
            
        } 
        animOnScroll();
    }
*/

    const[active, setActive] = useState("Как увидеть результаты прошлого теста?");

    return (
        <div>
            <div className="container">
                <div className="row rowmain">
                    <div className="col-md-6">
                        <h1 className="onlinemain _anim-items">Онлайн тест на COVID-19 в “IO.CLINIC”</h1>
                        <h4 className="knowmain _anim-items">Узнайте, есть ли у вас коронавирусная инфекция в организме</h4>
                    </div>
                    <div className="col-md-6">
                        <img  alt="corona" className="coronapic _anim-items" src={corona}></img>
                    </div>
                </div>
                <div className="about" id="about">
                    <h1 className="abouth1  _anim-items">О нас</h1>
                   <Slider/>
                    <div className="about-block">
                        <h5 className="weare_about _anim-items">Мы - компания, которая заботится о вашем здоровье.
                            Очень много людей имеют серьезные заболевания только по причине позднего их выявления.
                            Наша программа нацеленна на то, чтобы предотвратить это и заблаговременно выявить первые симптомы разных болезней без похода в больницу.
                            Мы хотим, чтобы вы жили долго и счастливо, прямо как и на этих слайдах.
                            Будьте здоровы, IO.CLINIC</h5>
                    </div>
                </div>
                <div className="onlinetests_packet">
                    <h1 className="onlinetesth1 _anim-items">Онлайн тесты</h1>
                    <h4 className="wearehaveh4 _anim-items">У нас существует несколько вариантов контроля за здоровьем:</h4>
                    <div className="row row-test _anim-items">
                        <div className="col-md-6">
                            <div className="col-left">
                                <h3 className="beginnertest">Новичок</h3>
                                <div className="col-left-bottom">
                                    <div className="bottom-rows">
                                        <div className="row rowtextonline">
                                            <img alt="galochka" className="galochka" src={galochka}></img>
                                            <h6 className="h6text">Тест проходит онлайн в интерактивном режиме</h6>
                                        </div>
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={galochka} alt="galochka"></img>
                                            <h6 className="h6text">Гарантия 100%</h6>
                                        </div>
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={galochka} alt="galochka"></img>
                                            <h6 className="h6text">Тест бесплатный</h6>
                                        </div>
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={krest} alt="krest"></img>
                                            <h6 className="h6text">Результаты сохраняются</h6>
                                        </div>
                                    </div>
                                    <div className="btn-block-online">
                                        <button className="btn btn-gotestonline">Перейти</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-left">
                                <h3 className="beginnertest">Продвинутый</h3>
                                <div className="col-left-bottom">
                                    <div className="bottom-rows">
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={galochka} alt="galochka"></img>
                                            <h6 className="h6text">Тест приезжает к вам домой </h6>
                                        </div>
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={galochka} alt="galochka"></img>
                                            <h6 className="h6text">Входит онлайн тест и сохраняется в вашем личном профиле</h6>
                                        </div>
                                        <div className="row rowtextonline">
                                            <img className="galochka" src={galochka} alt="galochka"></img>
                                            <h6 className="h6text">Поддержка консультанта 24/7</h6>
                                        </div>
                                    </div>
                                    <div className="btn-block-online">
                                        <button className="btn btn-gotestonline">Перейти</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "review" id = "review">
                    <h1 className = "reviewh1 _anim-items">Отзывы</h1>
                    <div className = "row rowreview _anim-items">
                        <div className = "col-md-4">
                            <div className = "review-col-1">
                                <div className = "row rowtop">
                                    <img className = "imgreview" src = {imgreview} alt="userpic"></img>
                                    <h6 className = "nameuser">Петр</h6>
                                    <h6 className = "datetime">13:45</h6>
                                </div>
                                <h5 className = "textofreview">Я просто поражен, решил попробовать из интереса пройти бесплатный тест по легким. Результат показал плохие показатели и я решил обратиться к врачу. Доктор сказал, что у меня оказывается болезнь легких и хорошо, что я рано обратился. Я вылечился, теперь все хорошо и я очень рад, что воспользовался вашими услугами</h5>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "review-col-1">
                                <div className = "row rowtop">
                                    <img className = "imgreview" src = {imgreview} alt="userpic"></img>
                                    <h6 className = "nameuser">Петр</h6>
                                    <h6 className = "datetime">13:45</h6>
                                </div>
                                <h5 className = "textofreview">Я просто поражен, решил попробовать из интереса пройти бесплатный тест по легким. Результат показал плохие показатели и я решил обратиться к врачу. Доктор сказал, что у меня оказывается болезнь легких и хорошо, что я рано обратился. Я вылечился, теперь все хорошо и я очень рад, что воспользовался вашими услугами</h5>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "review-col-1">
                                <div className = "row rowtop">
                                    <img className = "imgreview" src = {imgreview} alt="userpic"></img>
                                    <h6 className = "nameuser">Петр</h6>
                                    <h6 className = "datetime">13:45</h6>
                                </div>
                                <h5 className = "textofreview">Я просто поражен, решил попробовать из интереса пройти бесплатный тест по легким. Результат показал плохие показатели и я решил обратиться к врачу. Доктор сказал, что у меня оказывается болезнь легких и хорошо, что я рано обратился. Я вылечился, теперь все хорошо и я очень рад, что воспользовался вашими услугами</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "fag">
                    <h1 className = "fagh1">Часто задаваемые вопросы</h1>
                    <Accordion title = "Как увидеть результаты прошлого теста?" active = {active} setActive = {setActive} maintext = "Для того, чтобы результаты сохранялись вам нужно зарегестрироваться или войти в аккаунт"/> 
                    <Accordion title = "Что делать если забыл пароль?" active = {active} setActive = {setActive}  maintext = "Пароль можно сбросить и поменять в вашем личном кабинете во вкладке 'пароли'"/> 
                    <Accordion title = "Как мне удостовериться, что тест покажет правду?" active = {active} setActive = {setActive}  maintext = "Мы рекомендуем проходить миниммум 2 раза для достоверности результата. Тесты разработаны опытными врачами и психологами, поэтому достоверность - 100%"/> 
                    <Accordion title = "Если я не понимаю что мне нажимать там, что делать?" active = {active} setActive = {setActive}  maintext =  "Наши консультанты работают 24/7, поэтому вы в любое время можете позвонить или написать нам на почту и мы в течении 30 секунд обязательно вам ответим!"/> 
                </div>
            </div>
           
        </div>
    );
}