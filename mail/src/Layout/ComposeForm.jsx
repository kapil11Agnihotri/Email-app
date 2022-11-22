import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import classes from "./ComposeForm.module.css";
import axios from "axios";
import { htmlToText } from "html-to-text";
import {useSelector } from "react-redux";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


const ComposeForm = () => {
  const [content, setContent] = useState('')
  
  const emailRef = useRef();
  const subjectRef = useRef();
  const email=useSelector(state=>state.auth.email)
  console.log(email)
  const newEmail = email.replace("@", "");
  const finelEmail = newEmail.replace(".", "");
  

  const changeHandler = (value) => {
    const text = htmlToText(`${value}`, {
      wordwrap: 130,
    });

    setContent(text);
  };
  

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredSubject = subjectRef.current.value;

    const obj = {
      email: enteredEmail,
      subject: enteredSubject,
      mailText: content,
      read:false,
      date:new Date()
    };
    const emailUrl=enteredEmail.replace('@','').replace('.','')
    
    const response = await axios.post(
      `https://mail-1d965-default-rtdb.firebaseio.com/sent${finelEmail}.json`,
      obj
    );
    const data = await response.data;
    console.log(response);
    const res = await axios.post(
      `https://mail-1d965-default-rtdb.firebaseio.com/globalMail/sent${emailUrl}.json`,
      obj
    );
    const mailData = await response.data;
    console.log(response);
  };

  
   
  

 
  return (
    <section>
      <form>
        <div className={classes.form}>
          <label htmlFor="email">To:</label>
          <input placeholder="Enter mail" type="email" ref={emailRef} />
          <hr />
        </div>
        <div className={classes.form}>
          <input placeholder="Enter subject" ref={subjectRef} />
          <hr />
        </div>
        <div>
          <SunEditor value={content} onChange={changeHandler}/>
        </div>
        <Button onClick={submitHandler} variant="contained">
          Send Mail
        </Button>
      </form>
    </section>
  );
};

export default ComposeForm;
