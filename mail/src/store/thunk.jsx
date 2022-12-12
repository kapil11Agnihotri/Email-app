import axios from "axios";
import { mailActions } from "./MailSlice";


export const fetchdetails = (finelEmail) => {
    console.log(finelEmail)
  return async (dispatch) => {
    const getdata = async () => {
      const response = await axios.get(
        `https://mail-1d965-default-rtdb.firebaseio.com/globalMail/sent${finelEmail}.json`
      );
      console.log(response)
      const dataInbox= await response.data
      console.log(dataInbox)
      dispatch(mailActions.inboxMail(dataInbox))

     const res=await axios.get(`https://mail-1d965-default-rtdb.firebaseio.com/sent${finelEmail}.json`)
      const dataSentBox=await res.data
      dispatch(mailActions.updatedMail(dataSentBox)) 
    };
    // setInterval(()=>{
    //   getdata()
    // },2000)
    getdata()
    
  };
};
