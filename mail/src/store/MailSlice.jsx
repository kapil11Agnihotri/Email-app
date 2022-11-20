import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mail: [],
    change:false
  },
  reducers: {
    updatedMail(state, action) {
        console.log(action.payload)
      state.mail = action.payload;
      state.change=true
    },
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
