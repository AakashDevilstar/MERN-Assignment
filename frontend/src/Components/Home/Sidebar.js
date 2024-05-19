import React, { useEffect, useState } from 'react'
import {CgNotes} from 'react-icons/cg';
import {MdLabelImportant} from 'react-icons/md';
import {FaCheckDouble} from 'react-icons/fa';
import {TbNotebookOff} from 'react-icons/tb'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';

const Sidebar = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=[
        {
            title:'All Tasks',
            icons:<CgNotes/>,
            link:"/",
        },
        {
            title:'Important Tasks',
            icons:<MdLabelImportant/>,
            link:"/importantTasks",
        },
        {
            title:'Completed Tasks',
            icons:<FaCheckDouble/>,
            link:"/completedTasks",
        },
        {
            title:'InCompleted Tasks',
            icons:<TbNotebookOff/>,
            link:"/incompletedTasks",
        },
    ];

    const [Data,setData]=useState();

    const change=()=>{
        dispatch(authActions.logout());
        localStorage.clear("id");
        localStorage.clear("token");
        navigate('/signup')
    }
    const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};
    useEffect(()=>{
        const fetch=async()=>{
            const response=await axios.get("https://mern-assignment-2geqo2vun-aakashs-projects-a0b7af11.vercel.app/api/v2/getalltasks",{
                headers,
            });
            setData(response.data.data);
            // console.log(response.data.data);
        };
        fetch();    
    },[]);

  return (
    <>
       {data && (
         <div>
            <h2 className='text-xl font-semibold'>{Data?.username}</h2>
            <h4 className='mb-1 text-gray-400'>{Data?.email}</h4>
         <hr/>
     </div>
       )}
        <div>
        {data.map((items,i)=>(
            <Link to={items.link} key={i} className='my-2 flex items-center gap-2 p-2 rounded hover:bg-gray-600 hover:p-2 cursor-pointer'>{items.icons} {items.title}</Link>
        ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2' onClick={()=>change()}>
                Logout
            </button>
        </div>
    </>
  )
}

export default Sidebar