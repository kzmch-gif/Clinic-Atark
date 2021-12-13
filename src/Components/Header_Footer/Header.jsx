import React from "react";
import "./Header.css";
import heartbeat from "./heart-beat.png";
import { NavLink } from "react-router-dom";


const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    return (

        <header>
            {
                isLoggedIn ?
                    <div className="header">
                        <div className="container">
                            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                    <img className="bi me-2 heartbeat" alt="heartlogo" src={heartbeat} />
                                    <span className="fs-4 io-logo">IO.CLINIC</span>
                                </a>

                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavLink to="/" id="about" className="nav-link" aria-current="page">О нас</NavLink></li>
                                    <li className="nav-item"><NavLink to="online" className="nav-link">Онлайн-тесты</NavLink></li>
                                    <li className="nav-item"><NavLink to="review" className="nav-link">Отзывы</NavLink></li>
                                    <li className="nav-item"><NavLink to="contact" className="nav-link">Контакты</NavLink></li>
                                    <li className="nav-item"><NavLink to = "ga" className="nav-link">Q/A</NavLink></li>
                                    <li> <NavLink to="/profile"/*onClick={myLogin}*/ className=" btn btn_login">Профиль</NavLink></li>
                                </ul>
                            </header>
                        </div>
                    </div>

                    :

                    <div className="header">
                        <div className="container">
                            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                    <img className="bi me-2 heartbeat" alt="heartlogo" src={heartbeat} />
                                    <span className="fs-4 io-logo">IO.CLINIC</span>
                                </a>

                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavLink to="/" id="about" className="nav-link" aria-current="page">О нас</NavLink></li>
                                    <li className="nav-item"><NavLink to="online" className="nav-link">Онлайн-тесты</NavLink></li>
                                    <li className="nav-item"><NavLink to="review" className="nav-link">Отзывы</NavLink></li>
                                    <li className="nav-item"><NavLink to="contact" className="nav-link">Контакты</NavLink></li>
                                    <li className="nav-item"><NavLink to = "ga" className="nav-link">Q/A</NavLink></li>
                                    <li> <NavLink to="/login"/*onClick={myLogin}*/ className=" btn btn_login">Войти</NavLink></li>
                                </ul>
                            </header>
                        </div>
                    </div>
            }
        </header>
    );
}

export default Header;