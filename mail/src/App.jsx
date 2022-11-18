import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LoginPage from './Auth/LoginPage'
import { authActions } from './store/AuthSlice'

const App = () => {
 const dispatch=useDispatch()

 useEffect(()=>{
  dispatch(authActions.initialToken())
 },[])



  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default App