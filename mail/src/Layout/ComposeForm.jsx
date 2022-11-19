import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Button } from "@mui/material";
import classes from './ComposeForm.module.css'
import axios from 'axios'

const ComposeForm = () => {
  
  const [content, setContent] = useState("");
  const emailRef=useRef()
  const subjectRef=useRef()

//   const contentChange =(value)=>{
//     let text='';
//     value.blocks.forEach((e)=>{
//         text+=`${e.text}`;
//     })
//     setContent(text)
//   }

  const submitHandler= async(event)=>{
    event.preventDefault()
    const enteredEmail=emailRef.current.value;
    const enteredSubject=subjectRef.current.value;

    const obj={
      email:enteredEmail,
      subject:enteredSubject,
      mailText:content,
    }
    const response=await axios.post('https://mail-1d965-default-rtdb.firebaseio.com/sent.json',obj)
     const data=await response.data;
     console.log(data)

    
  }

  return (
    <section>
      <form >
        <div className={classes.form}>
          <label htmlFor="email">To:</label>
          <input placeholder="Enter mail" type='email' ref={emailRef}/>
          <hr />
        </div>
        <div className={classes.form}> 
          <input placeholder="Enter subject" ref={subjectRef} />
          <hr />
        </div>
        <div>
          <JoditEditor
            value={content}
            onChange={newContent=>setContent(newContent)}
          />
        </div>
        <Button onClick={submitHandler} variant="contained">Send Mail</Button>
      </form>
    </section>
  );
};

export default ComposeForm;
