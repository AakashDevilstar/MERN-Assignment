import React, { useState } from 'react'
import {CiHeart} from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import {IoAddCircleSharp} from 'react-icons/io5'
import {MdDelete} from 'react-icons/md'

const Cards = ({home,setinputdatashow}) => {

   const data=[
    {
        title:"Projects",
        desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
        status:'Incompleted',
    },
    {
        title:"Assignment",
        desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
        status:'completed',
    },
    {
        title:"Internal Practial",
        desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.",
        status:'Incompleted',
    },
    {
        title:"External Practical",
        desc:"Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.",
        status:'Incompleted',
    },
   ]
   
   const [ImportantButton,setImportantButton]=useState("Incompleted");

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && data.map((items,i)=>(
            <div className=' bg-gray-800 rounded-xl p-4 flex flex-col justify-between'>
                <div>
                    <h3 className='text-xl font-semibold'>{items.title}</h3>
                    <p className='text-gray-300 my-2'>{items.desc}</p>
                </div>
                <div className='mt-4 w-full flex items-center'>
                <button className={`${items.status==="Incompleted" ?"bg-red-400":"bg-green-700"} p-2 rounded w-3/6`}>{items.status}</button>
                <div className='text-white w-3/6 flex justify-around text-xl p-2 font-semibold'>
                    <button><CiHeart/></button>
                    <button><FaEdit/></button>
                    <button><MdDelete/></button>
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