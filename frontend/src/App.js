import React, { useEffect } from 'react'
import Home from './Pages/Home'
import { Router,Routes,Route,BrowserRouter, useNavigate } from 'react-router-dom'
import AllTasks from './Pages/AllTasks'
import ImportantTasks from './Pages/ImportantTasks'
import CompletedTasks from './Pages/CompletedTasks'
import Incompleted from './Pages/Incompleted'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth'

const App = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    else if(isLoggedIn===false){
      navigate('/signup'); 
    }
  },[]);
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<AllTasks/>}/>
              <Route path="/importantTasks" element={<ImportantTasks/>} />
              <Route path="/completedTasks" element={<CompletedTasks/>} />
              <Route path="/incompletedTasks" element={<Incompleted/>} />
            </Route>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
