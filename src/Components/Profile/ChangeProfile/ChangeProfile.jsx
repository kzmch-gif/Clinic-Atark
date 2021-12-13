import React from "react";
import s from "./ChangeProfile.module.css";
import { NavLink } from "react-router-dom";


const ChangeProfile = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    return (
        <div className="container">
            <h1 className={s.h1change + ' mb-5'}>Изменить профиль</h1>
            <h3 className={s.h3personal}>Личные данные <span className={s.changeh3}>(редактирование)</span></h3>
            <form>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h6 className={s.nameh6}>Имя</h6>
                        <input className={s.inputname} type="text" placeholder="Имя"></input>
                    </div>
                    <div className="col-md-4">
                        <h6 className={s.nameh6}>Электронная почта</h6>
                        <input className={s.inputname} type="text" placeholder="Почта"></input>
                    </div>
                    <div className="col-md-4">
                        <h6 className={s.nameh6}>Номер телефона</h6>
                        <input className={s.inputname} type="text" placeholder="Телефон"></input>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h6 className={s.nameh6}>Возраст</h6>
                        <input className={s.inputname} type="text" placeholder="19"></input>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h6 className={s.nameh6}>Пол</h6>
                        <select className={s.inputname} name="Пол" >
                            <option value="">--Выберите пол--</option>
                            <option value="female">Женский</option>
                            <option value="male">Мужской</option>
                        </select>
                    </div>
                </div>
                <div className = {s.btn_success}>
                <button className = {s.btnsave + " mt-3"}>Сохранить</button>
                </div>
            </form>
        </div>
    );
}

export default ChangeProfile;