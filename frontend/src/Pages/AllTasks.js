import React, { useState } from 'react'
import Cards from '../Components/Home/Cards'
import { IoAddCircleSharp } from 'react-icons/io5'
import InputData from '../Components/Home/InputData'

const AllTasks = () => {
    const [inputdatashow,setinputdatashow]=useState("hidden");
  return (
    <>
     <div>
       <div className='w-full flex items-end px-4 py-2 justify-end'>
        <button onClick={()=>setinputdatashow("fixed")}>
          <IoAddCircleSharp className='text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
        </button>
       </div>
       <Cards home={"true"} setinputdatashow={setinputdatashow}/>
      </div>
      <InputData inputdatashow={inputdatashow} setinputdatashow={setinputdatashow}/>
    </>
  )
}

export default AllTasks