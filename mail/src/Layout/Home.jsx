import React from "react";
import ComposeMail from "./ComposeMail";
import "./Home.css";
import InboxIcon from "@mui/icons-material/Inbox";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";


const Home = () => {
  const location=useNavigate()

  const inboxHandler=()=>{
    location('/Inbox')
  }
  const sentboxHandler=()=>{
    location('/Sentbox')
  }

  return (
    <>
      
      <ComposeMail />
      <div>
      <Button className="icon" onClick={inboxHandler}>
        <InboxIcon />
        <p className="para">Inbox</p>
      </Button>
      </div>
      
      <Button className="icon" onClick={sentboxHandler}>
        <ForwardToInboxIcon />
        <p className="para">SentBox</p>
      </Button>
    </>
  );
};

export default Home;
