import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {authActions} from "../store/auth";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [Data,setData]=useState({username:"",password:""});
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  if(isLoggedIn===true){
    navigate("/");
  }

  const change=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value})
  }

  const submit=async()=>{
    try{
      if(Data.username === "" || Data.password===""){
        alert("All field are required!!!");
      }else{
        const response=await axios.post("https://mern-assignment-2geqo2vun-aakashs-projects-a0b7af11.vercel.app/api/v1/login",Data);
        setData({username:"",password:""});
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token",response.data.token);
        dispatch(authActions.login());
        navigate("/");
      }
    }
    catch(err){
      alert(err.response.data.message);
    }
  }

  return (
    <div className='h-[35vh] flex items-center justify-center mt-40'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-semibold'>LogIn</div>
            <input
              type="username"
              placeholder='username'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="username"
              onChange={change}
              value={Data.username}
            />
            <input
              type="password"
              placeholder='password'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="password"
              value={Data.password}
              onChange={change}
            />
           <div className='w-full flex items-center justify-between'>
           <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded' onClick={()=>submit()}>
                LogIn
            </button>
            <Link to="/signup" className='text-gray-600 hover:text-gray-200'>Not Having an account? SignUp here</Link>
           </div>
        </div>
    </div>
  )
}

export default Login