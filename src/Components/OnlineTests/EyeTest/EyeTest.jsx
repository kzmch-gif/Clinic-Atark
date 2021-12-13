import React from "react";
import s from "./EyeTest.module.css";
import pic1 from "./lazernaya-korrektsiya-zreniya (1).jpg"
import { NavLink } from "react-router-dom";


export default function EyeTest() {
    return (
        <div className={"container"}>
            <div className={s.rowcorona}>
                <div className={"col-md-6"}>
                    <h1 className = {s.h1test}>Пройдите тест на проверку зрения, который сможет выявить проблемы глаза на раннем этапе</h1>
                    <h4 className = {s.h4be}>
                        Будьте особенно внимательны к своему здоровью. Вовремя распознав опасные симптомы, Вы сможете уберечь себя и близких.
                        Мы подготовили для Вас тест с рекомендациями*: пройдите его, чтобы оценить своё состояние.</h4>
                    <NavLink to = "teste" className = {s.btnstart}>Начать</NavLink>
                </div>
                <div className={"col-md-6"}>
                    <img className = {s.pic1main} src = {pic1} alt = "coronapic"></img>
                </div>
            </div>
        </div>
    );
}
