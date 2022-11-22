import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./Auth/LoginPage";
import { authActions } from "./store/AuthSlice";
import Home from "./Layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Layout/Header";

import Sent from "./Layout/Mails/Sent";
import Inbox from "./Layout/Mails/inbox";


let isInitial=true;
const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => authActions.login());
  
  useEffect(() => {
    dispatch(authActions.initialToken());
  }, []);

  useEffect(() => {
    dispatch(authActions.setEmail());
  }, []);

 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isLoggedIn && <Route path="/Home" element={<Home />} />}
        {isLoggedIn && <Route path="/sent" element={<Sent />} />}
        {isLoggedIn && <Route path="/Inbox" element={<Inbox />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
