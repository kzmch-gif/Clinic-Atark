import React, {useState} from "react";
import "./Registration.css";
import heartbeat from "./heart-beat.png";
import { NavLink, useNavigate} from "react-router-dom";

export default function Registration({setIsLoggedIn, isLoggedIn}) {
  
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    async function registration(e) {
        e.preventDefault();
        let result = await fetch("http://atarkback/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            // body: JSON.stringify({Name: name, Password: Password, Email: Email, Phone: phone, Birthday: birthday}),
            body: JSON.stringify({name, age, mail, password}),
        });

      
        
        console.log(result);
        console.log(result.status);
        if(result.status === 200){
            navigate('/profile');
        }
        else if(result.status === 404){
            alert("Неверная валидация полей");
        }
        else if(result.status === 400){
            alert("Пожалуйста, заполните поля");
        }
    }


    return (
        <div className="container">
            <div className="text-center">
                <div className="form-signin">

                    <img className="mb-3" src={heartbeat} alt="heartlogo" width="72" height="57" />
                    <h2 className="h2hello">Вас приветствует IO.CLINIC</h2>
                    <h4 className=" mb-3 fw-normal">Регистрация нового пользователя</h4>
                    <h6 className="text-muted pleaseh6 mb-4">Заполните пожалуйста все необходимые поля</h6>
                    <form className="form-regist"  onSubmit={registration}>
                        <div className=" w-50 mb-3">
                            <h6 className="fw-normal h6textinput">Введите ваше имя</h6>
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="floatingPassword" placeholder="Имя" />

                        </div>
                        <div className=" w-50 mb-3">
                            <h6 className="fw-normal h6textinput">Введите ваш возраст</h6>
                            <input type="text" onChange={(e)=>setAge(e.target.value)} className="form-control" id="floatingPassword" placeholder="0-100" />

                        </div>
                        <div className="mb-3 w-50">
                            <h6 className="fw-normal h6textinput">Введите ваш email</h6>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" id="floatingInput" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 w-50">
                            <h6 className="fw-normal h6textinput">Придумайте свой пароль</h6>
                            <input type="password"onChange={(e)=>setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />

                        </div>

                        <div className="check-remember checkbox mb-3 w-50 ">
                            <label>
                                <input className="" type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button type = "submit" className="w-50 btn btn-lg btn-primary btn-registr mb-3" >Зарегистрироваться</button>
                        <h6>У вас уже есть аккаунт? Войдите <NavLink to="/login">здесь</NavLink></h6>
                        <p className="mt-5 mb-3 text-muted year">© 2017–2021</p>
                    </form>
                </div>

            </div>

        </div>
    )
}