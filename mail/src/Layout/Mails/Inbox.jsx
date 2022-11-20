import React from "react";
import { useSelector } from "react-redux";
import Home from "../Home";
import Maillist from "./Maillist";

const Inbox = () => {
  const mails = useSelector((state) => state.mails.mail);
  console.log(mails);


  return (
    <div>
      <Home/>
     <Maillist mails={mails}/>
    </div>
  );
};

export default Inbox;
