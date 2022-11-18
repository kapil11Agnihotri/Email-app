import {createSlice} from '@reduxjs/toolkit' 

const authSlice=createSlice({
    name:'auth',
    initialState:{
        token:''
    },
    reducers:{
        login(state,action){
            state.token=action.payload
            localStorage.setItem('token',action.payload)
        },
        logout(){
           localStorage.removeItem('token')
        },
        initialToken(state){
          let token=localStorage.getItem('token')
          state.token=token
        }
    }

})
export const authActions=authSlice.actions;
export default authSlice.reducer;