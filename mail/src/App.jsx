import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./Auth/LoginPage";
import { authActions } from "./store/AuthSlice";
import Home from "./Layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./Layout/Mails/Inbox";
import SentMails from "./Layout/Mails/SentMails";
import Header from "../src/Layout/Header";
import { fetchdetails } from "./store/thunk";


const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => authActions.login());
  const email = useSelector((state) => state.auth.email);
  const change=useSelector(state=>state.mails.change)
  console.log(email);
  const newEmail = email.replace("@", "");
  const finelEmail = newEmail.replace(".", "");

  useEffect(() => {
    dispatch(authActions.initialToken());
  }, []);

  useEffect(() => {
    dispatch(authActions.setEmail());
  }, []);

  useEffect(() => {
    
      dispatch(fetchdetails(finelEmail));
    
   
  }, [change]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isLoggedIn && <Route path="/Home" element={<Home />} />}
        {isLoggedIn && <Route path="/Inbox" element={<Inbox />} />}
        {isLoggedIn && <Route path="/Sentbox" element={<SentMails />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
