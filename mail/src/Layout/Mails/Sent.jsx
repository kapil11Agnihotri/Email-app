import React from "react";
import { useSelector } from "react-redux";
import Home from "../Home";
import Maillist from "./Maillist";
import './Inbox.css'

const Sent = () => {
  const mails = useSelector((state) => state.mails.mail);
  console.log(mails);


  return (
    <div className="inbox">
        <div>
        <Home/>
        </div>
      <div className="mail">
      <Maillist mails={mails}/>
      </div>
     
    </div>
  );
};

export default Sent;
