import React from "react";
import s from "./OnlineTest.module.css";
import {NavLink} from "react-router-dom";

export default function OnlineTest() {
    return (
        <div className="container">
            <h1 className="mb-md-5">Онлайн тесты</h1>
            <div className="row">
                <div className={"col-md-3" + " test " + "test1" + " mb-3"}>
                    <h5 className={s.h5test}>Тест на коронавирус <span className={s.online}>online</span></h5>
                    <NavLink to = "coronatest"> <div className="coronatest"> </div></NavLink>
                    <h6 className={s.h6bodytext + " mt-3"}>Пройдите тест на коронавирус онлайн и выявите первые симптомы болезни сейчас!</h6>
                </div>
                <div className="col-md-3 test test2">
                    <h5 className={s.h5test}>Тест на зрение</h5>
                    <NavLink to = "eyetest"><div className="eyestest"></div></NavLink>
                    <h6 className={s.h6bodytext + " mt-3"}>Пройдите тест на проверку зрения онлайн. Он поможет выявить заболевания глаза на ранней стадии</h6>
                </div>
                <div className="col-md-3 test test3">
                    <h5 className={s.h5test}>Тест на легкие</h5>
                    <NavLink to = "lungtest"><div className="lungstest"></div></NavLink>
                    <h6 className={s.h6bodytext + " mt-3"}>Пройдите тест на нарушение работы легочной системы. И вы узнаете есть ли у вас проблемы со здоровьем?</h6>
                </div>
                <div className="col-md-3 test test4">
                    <h5 className={s.h5test}>Тест на слух</h5>
                    <NavLink to = "eartest"><div className="earstest"></div></NavLink>
                    <h6 className={s.h6bodytext + " mt-3"}>Проверьте свой слух за 5 минут и узнайте какой у вас физический возраст ушей</h6>
                </div>
                <div className="col-md-3 test test4">
                    <h5 className={s.h5test}>Тест на слух</h5>
                    <div className="earstest"></div>
                    <h6 className={s.h6bodytext + " mt-3"}>Проверьте свой слух за 5 минут и узнайте какой у вас физический возраст ушей</h6>
                </div>
            </div>
        </div>
    );
}
