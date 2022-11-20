import axios from "axios";
import { mailActions } from "./MailSlice";


export const fetchdetails = (finelEmail) => {
    console.log(finelEmail)
  return async (dispatch) => {
    const getdata = async () => {
      const response = await axios.get(
        `https://mail-1d965-default-rtdb.firebaseio.com/sent${finelEmail}.json`
      );
      console.log(response)
      const data= await response.data
      console.log(data)
      dispatch(mailActions.updatedMail(data))
    };
    getdata()
  };
};
