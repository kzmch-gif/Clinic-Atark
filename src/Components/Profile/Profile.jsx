import React, { useEffect, useState } from "react";
import "./Profile.css";
import imgprofile from "./oic.png";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Profile({setIsLoggedIn, isLoggedIn}) {


    const navigate = useNavigate();

    let obj = JSON.parse(localStorage.getItem('user-info'));
    let name = obj.user['name'];
    let id = obj.user['id'];

    const handleLogOut = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
        window.localStorage.removeItem("user-info");
        if(isLoggedIn == false){         
          navigate("/login");            
        }
    };
    console.log(obj)

    const [booking, setPosts] = useState([]);
    useEffect(() => {
       axios
           .get(`http://atarkback/api/list/{id}`)
            .then(
                (response) => {
                console.log(response)
                  setPosts(response.data)})              
   },[]);


    return (
        <div className="container">
            <h1 className="h1usercab mb-md-4">Личный кабинет</h1>
            <div className="row rowusername mb-3">
                <img className="userpic" src={imgprofile} alt="userpic" />
                <h3 className="username">{name}</h3>
                <NavLink  to="/change" className="btn w-25 btn-change-profile">Изменить профиль</NavLink>
                <NavLink onClick={handleLogOut}
                       className="btn btn-outline-dark w-25 ms-2"
                      to="/login"
                      activeclassname="btn btn-outline-info w-25">
              Выйти
              </NavLink>     
            </div>

            <div>
                <h3 className = "yourtesth3">Ваши пройденные тесты:</h3>
                <div className="endtest">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="coronatest">
                                <span>Тест на Корону</span>
                            </div>
                            <h6 className = "h6result">Результат:<span> норма</span></h6>
                        </div>
                        <div className="col-md-3">
                            <div className="lungstest">
                                <span>Проверить легкие</span>
                            </div>
                            <h6 className = "h6result">Результат:<span> норма</span></h6>
                        </div>
                        <div className="col-md-3">
                            <div className="eyestest">
                                <span>Тест на зрение</span>
                            </div>
                            <h6 className = "h6result">Результат:<span> норма</span></h6>
                        </div>
                        <div className="col-md-3">
                            <div className="earstest">
                                <span>Тест на слух</span>
                            </div>
                            <h6 className = "h6result">Результат:<span> норма</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}