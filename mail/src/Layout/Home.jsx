import React ,{useEffect}from "react";
import ComposeMail from "./ComposeMail";
import "./Home.css";
import InboxIcon from "@mui/icons-material/Inbox";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import {fetchdetails} from '../store/thunk'
import { useDispatch,useSelector } from "react-redux";

const Home = () => {
  const dispatch=useDispatch()
  const email = useSelector((state) => state.auth.email);
  const change = useSelector((state) => state.mails.change);
  console.log(email);
  const newEmail = email.replace("@", "");
  const finelEmail = newEmail.replace(".", "");

  useEffect(() => {
   
    dispatch(fetchdetails(finelEmail,email));
  }, [change]);

  const location=useNavigate()

  const inboxHandler=()=>{
    location('/Inbox')
  }
  const sentboxHandler=()=>{
    location('/sent')
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
