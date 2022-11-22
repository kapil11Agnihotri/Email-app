import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mail: [],
    inbox:[],
    change:false
  },
  reducers: {
    updatedMail(state, action) {
        console.log(action.payload)
      state.mail = action.payload;
      state.change=true
    },
    inboxMail(state,action){
      console.log(action.payload)
       state.inbox=action.payload
       state.change=true
    },
   
    removeFromInbox(state,action){
      console.log(action.payload)
    state.inbox.splice(action.payload,1)
    state.change=true
    }
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
