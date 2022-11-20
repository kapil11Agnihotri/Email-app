import React from "react";

const Maillist = ({ mails }) => {
  let data = [];
  
  for (const key in mails) {
    console.log(mails[key].mailText);
    data.push(mails[key]);
  }
  function deleteMail(index){
    console.log(index);
  }
  console.log(data);
  return (
    <div>
      {data.map((items, index) => {
        
        return (
          <>
            <div>{items.email}</div>
            <div>{items.subject}</div>
            <div>{items.mailText}</div>
            <div>{items.date}</div>
            <button onClick={()=>deleteMail(index)}>delete</button>
          </>
        );
      })}
    </div>
  );
};

export default Maillist;
