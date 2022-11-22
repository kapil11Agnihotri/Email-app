import React, { useState } from "react";
import "./Mail.css";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const Maillist = ({ mails }) => {
  const email=useSelector(state=>state.auth.email)
  const finalEmail=email.replace('@',"").replace('.','');
 

  let data2 = [];
  for (const key in mails) {
    data2.push(mails[key]);
  }
  console.log(data2);
  const [data, setData] = useState(data2);

  // useEffect(()=>{
  //    axios.put( `https://mail-1d965-default-rtdb.firebaseio.com/globalMail/sent${finalEmail}.json`,data)
  // },[data])
const  deleteMail=(index)=>{
  // dispatch(mailActions.removeFromInbox(index))
  let temp= data.filter((item,ind)=> index!=ind)
  setData(temp);
  axios.put( `https://mail-1d965-default-rtdb.firebaseio.com/globalMail/sent${finalEmail}.json`,temp)
}


  return (
    <div>
      {data.map((items, index) => {
        console.log("read", items);
        return (
          <div>
          <div
            className="list"
            style={{
              background: `${items.read === false ? "darkgrey" : "white"}`,
            }}
            onClick={() => {
              // const temp={
              //   ...items,
              //   read:true

              // }
              let temp = data.map((item, index2) => {
                if (index2 === index) {
                  const temp2 = {
                    ...items,
                    read: true,
                  };
                  return temp2;
                }
                return item;
              });
              axios.put( `https://mail-1d965-default-rtdb.firebaseio.com/globalMail/sent${finalEmail}.json`,temp)
              setData(temp);
              
            }}
          >
            <div>{items.email}</div>
            <div>{items.subject}</div>
            <div>{items.mailText}</div>
            <div>{items.date}</div>
          </div>
          <div className="delete">
          <Button
            onClick={() => deleteMail(index)}
            variant="outlined"
            color="error"
          >
            <DeleteForeverIcon />
          </Button>
        </div>
        </div>
        );
      })}
    </div>
  );
};

export default Maillist;
