import React, {useEffect, useState} from "react";
import "./Login.css";
import heartbeat from "./heart-beat.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login({setIsLoggedIn, isLoggedIn}) {
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    const [statusCode, setStatusCode] = useState(null);
    useEffect(() => {
        if(localStorage.getItem('user-info') && isLoggedIn === true){
            navigate("/profile");
        }
    }, [])

 
    async function myLoginAPI1(e) {
        e.preventDefault();
        let item = {password, mail};
        // try{
           
    let token = document.head.querySelector('meta[name="csrf-token"]');


        let result = await fetch("http://atarkback/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, /",
                "X-CSRF-TOKEN": token 
                 },
            body: JSON.stringify({mail: mail, password: password}),
        });
        console.log(result);
        console.log(result.status);

        // console.log(result.id);
        if(result.status === 201){

            setStatusCode(201);
            console.log({mail, password});
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            localStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true);
            navigate("/profile")
            console.log(result);
            console.log(result.status);
            }
            else if(result.status === 404){ 
                setStatusCode(404);
                alert("Вы ввели неправильные данные");
                
            }
            else if(result.status === 400){
                setStatusCode(400);
                alert("Пожалуйста, заполните поля");
            }
        
    }

   
    return (
        <div className="container">
        <div className="text-center">
            <div className="form-signin">
                <img className="mb-3" src={heartbeat} alt="heartlogo" width="72" height="57" />
                <h2 className="">Вас приветствует IO.CLINIC</h2>
                <h4 className=" mb-3 fw-normal">Вход в личный кабинет</h4>
                <h6 className="text-muted mb-4">Заполните пожалуйста все необходимые поля</h6>
                <form className="form-regist" onSubmit={myLoginAPI1} method ="POST">
                    <div className="form-floating w-50">
                        <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating w-50">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="check-remember checkbox mb-3 w-50 ">
                        <label>
                            <input className="" type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-50 btn btn-lg btn-primary btn-registr mb-3" type="submit">Войти</button>
                    <h6>У вас нет аккаунта? Зарегистрируйтесь <NavLink to="/registration">здесь</NavLink></h6>
                    <p className="mt-5 mb-3 text-muted year">© 2017–2021</p>
                </form>
            </div>

        </div>

    </div>
    );
}