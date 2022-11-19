import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./Auth/LoginPage";
import { authActions } from "./store/AuthSlice";
import Home from "./Layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector(state=>authActions.login())

  useEffect(() => {
    dispatch(authActions.initialToken());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<LoginPage />}/>
        {isLoggedIn && <Route path= '/Home' element={<Home />} />}
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
