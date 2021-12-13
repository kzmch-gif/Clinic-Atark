import React from "react";
import s from "./EarTest.module.css";
import { NavLink } from "react-router-dom";
import ear from "./7f2486e912b9e32809837ff6d4be6a17_ce_2000x1333x0x14_cropped_666x444.jpg"


export default function LungTest() {
    return (
        <div className={"container"}>
            <div className={s.rowcorona}>
                <div className={"col-md-6"}>
                    <h1 className = {s.h1test}>Пройдите тест на и проверьте ваши легкие на наличие разных заболеваний!</h1>
                    <h4 className = {s.h4be}>
                        Будьте особенно внимательны к своему здоровью в эти дни — вовремя распознав опасные симптомы, Вы сможете уберечь себя и близких.
                        Мы подготовили для Вас тест с рекомендациями*: пройдите его, чтобы оценить своё состояние.</h4>
                    <NavLink to = "testear" className = {s.btnstart}>Начать</NavLink>
                </div>
                <div className={"col-md-6"}>
                    <img src = {ear} alt = "coronapic"></img>
                </div>
            </div>
        </div>
    );
}
