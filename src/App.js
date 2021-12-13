import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header_Footer/Header';
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router';
import Registration from './Components/Registration/Registration';
import Footer from './Components/Header_Footer/Footer';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import OnlineTest from './Components/OnlineTests/OnlineTests';
import ChangeProfile from './Components/Profile/ChangeProfile/ChangeProfile';
import CoronaTest from './Components/OnlineTests/CoronaTest/CoronaTest';
import TestC from './Components/OnlineTests/CoronaTest/TestC';
import EyeTest from './Components/OnlineTests/EyeTest/EyeTest';
import TestE from './Components/OnlineTests/EyeTest/TestE';
import LungTest from './Components/OnlineTests/LungTest/LungTest';
import TestL from './Components/OnlineTests/LungTest/TestL';
import EarTest from './Components/OnlineTests/EarTest/EarTest';
import TestEar from './Components/OnlineTests/EarTest/TestEar';

  

const App  = (props) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    return (
      <BrowserRouter>
        <div className="App">
         <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes >

            <Route path='/' element={<Main/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path='/online' element={<OnlineTest/>} />
            <Route path='/change' element={<ChangeProfile/>} />


            <Route path='/online/coronatest' element={<CoronaTest/>} />
            <Route path='/online/coronatest/testc' element={<TestC/>} />

            <Route path='/online/eyetest' element={<EyeTest/>} />
            <Route path='/online/eyetest/teste' element={<TestE/>} />

            <Route path='/online/lungtest' element={<LungTest/>} />
            <Route path='/online/lungtest/testl' element={<TestL/>} />

            <Route path='/online/eartest' element={<EarTest/>} />
            <Route path='/online/eartest/testear' element={<TestEar/>} />

          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    );
}

export default App;
