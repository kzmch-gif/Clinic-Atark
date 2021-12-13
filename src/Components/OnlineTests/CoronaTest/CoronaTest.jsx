import React from "react";
import s from "./CoronaTest.module.css";
import corona from "./coronamain.png"
import { NavLink } from "react-router-dom";


export default function CoronaTest() {
    return (
        <div className={"container"}>
            <div className={s.rowcorona}>
                <div className={"col-md-6"}>
                    <h1 className = {s.h1test}>Пройдите тест на симптомы коронавируса онлайн!</h1>
                    <h4 className = {s.h4be}>
                        Будьте особенно внимательны к своему здоровью в эти дни — вовремя распознав опасные симптомы, Вы сможете уберечь себя и близких.
                        Мы подготовили для Вас тест с рекомендациями*: пройдите его, чтобы оценить своё состояние.</h4>
                    <NavLink to = "testc" className = {s.btnstart}>Начать</NavLink>
                </div>
                <div className={"col-md-6"}>
                    <img src = {corona} alt = "coronapic"></img>
                </div>
            </div>
        </div>
    );
}
