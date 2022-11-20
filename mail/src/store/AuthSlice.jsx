import {createSlice} from '@reduxjs/toolkit' 

const authSlice=createSlice({
    name:'auth',
    initialState:{
        token:'',
        email:''
    },
    reducers:{
        login(state,action){
            state.token=action.payload
            localStorage.setItem('token',action.payload)
        },
        logout(){
           localStorage.removeItem('token')
           localStorage.removeItem('email')
        },
        initialToken(state){
          let token=localStorage.getItem('token')
          state.token=token
        },
        email(state,action){
          state.email=action.payload
          localStorage.setItem('email',action.payload)
          
        },
        setEmail(state){
          const email=localStorage.getItem('email')
          state.email=email
        }
    }

})
export const authActions=authSlice.actions;
export default authSlice.reducer;