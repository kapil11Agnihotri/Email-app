import React from "react";
import Home from "../Home";
import { useSelector } from "react-redux";
import Maillist from "./Maillist";

const Inbox = () => {
  const mails = useSelector((state) => state.mails.inbox);
  console.log("inbox", mails);

  return (
    <div className="inbox">
      <div>
        <Home />
      </div>
      <div className="mail">
        <Maillist mails={mails} />
      </div>
    </div>
  );
};

export default Inbox;
