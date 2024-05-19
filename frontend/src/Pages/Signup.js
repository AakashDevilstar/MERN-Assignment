import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Signup = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const navigate=useNavigate();
  if(isLoggedIn===true){
    navigate("/");
  }
  const [Data,setData]=useState({username:"",email:"",password:""});

  const change=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value})
  }

  const submit=async()=>{
    try{
      if(Data.username === "" || Data.email==="" || Data.password===""){
        alert("All field are required!!!");
      }else{
        const response=await axios.post("https://mern-assignment-2geqo2vun-aakashs-projects-a0b7af11.vercel.app/api/v1/signup",Data);
        setData({username:"",email:"",password:""});
        alert(response.data.message);
        navigate("/login");
      }
    }
    catch(err){
      alert(err.response.data.message);
    }
  }

  return (
    <div className='h-[98vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-semibold'>Signup</div>
            <input
              type="username"
              placeholder='username'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="username"
              value={Data.username}
              onChange={change}
            />
            <input
              type="email"
              placeholder='email'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="email"
              value={Data.email}
              required
              onChange={change}
            />
            
            <input
              type="password"
              placeholder='password'
              value={Data.password}
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="password"
              onChange={change}
            />
            
            <div className='w-full flex items-center justify-between'>
           <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded' onClick={()=>submit()}>
                SignUp
            </button>
            <Link to="/login" className='text-gray-600 hover:text-gray-200'>Already Have an Account? login here</Link>
           </div>
        </div>
    </div>
  )
}

export default Signup