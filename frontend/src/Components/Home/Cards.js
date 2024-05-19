import axios from 'axios'
import React, { useState } from 'react'
import {CiHeart} from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import {IoAddCircleSharp} from 'react-icons/io5'
import {MdDelete} from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'

const Cards = ({home,setinputdatashow,data,setupdatedData}) => {

//    const data=[
//     {
//         title:"Projects",
//         desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
//         status:'Incompleted',
//     },
//     {
//         title:"Assignment",
//         desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
//         status:'completed',
//     },
//     {
//         title:"Internal Practial",
//         desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.",
//         status:'Incompleted',
//     },
//     {
//         title:"External Practical",
//         desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
//         status:'Incompleted',
//     },
//    ]
  const [ImportantButton,setImportantButton]=useState("Incompleted");
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};
  const handleCompleteTask=async(id)=>{
    try{
        const res=await axios.put(`http://localhost:1000/api/v2/updatecomptask/${id}`,
        {}, // put ke time pe phele data bejo then headers but ham data nhi bej rahe hai
        {headers}
    );
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
  }
  const handleImportant=async(id)=>{
    try{
        const res=await axios.put(`http://localhost:1000/api/v2/updateimptask/${id}`,
        {}, // put ke time pe phele data bejo then headers but ham data nhi bej rahe hai
        {headers}
    );
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
  }

  const handledelete=async(id)=>{
    try{
        const res=await axios.delete(`http://localhost:1000/api/v2/deletetask/${id}`,
        {headers}
    );
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
  }

  const handleupdate=(id,title,desc)=>{
    setinputdatashow("fixed");
    setupdatedData({id:id,title:title,desc:desc}); 
  }


  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && data.map((items,i)=>(
            <div className=' bg-gray-800 rounded-xl p-4 flex flex-col justify-between'>
                <div>
                    <h3 className='text-xl font-semibold'>{items.title}</h3>
                    <p className='text-gray-300 my-2'>{items.desc}</p>
                </div>
                <div className='mt-4 w-full flex items-center'>
                <button className={`${items.completed===false ?"bg-red-400":"bg-green-700"} p-2 rounded w-3/6`} onClick={()=>handleCompleteTask(items._id)}>{items.completed===true?"Completed":"InCompleted"}</button>
                <div className='text-white w-3/6 flex justify-around text-xl p-2 font-semibold'>
                    <button onClick={()=>handleImportant(items._id)}>
                        {items.important===false?<CiHeart/>:<FaHeart className='text-red-500'/>}
                    </button>   
                    {home!=="false" && <button onClick={()=>handleupdate(items._id,items.title,items.desc)}><FaEdit/></button>}
                    <button onClick={()=>handledelete(items._id)}>
                        <MdDelete/>
                    </button>
                </div>
            </div>
        </div>
        ))}
        {home==="true" && <button onClick={()=>setinputdatashow("fixed")} className='bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 cursor-pointer transition-all duration-300'>
            <IoAddCircleSharp className='text-5xl'/>
           <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>}
    </div>
  )
}

export default Cards