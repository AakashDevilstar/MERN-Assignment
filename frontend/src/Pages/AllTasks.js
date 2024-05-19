import React, { useEffect, useState } from 'react'
import Cards from '../Components/Home/Cards'
import { IoAddCircleSharp } from 'react-icons/io5'
import InputData from '../Components/Home/InputData'
import axios from 'axios'

const AllTasks = () => {
    const [inputdatashow,setinputdatashow]=useState("hidden");
    const[Data,setData]=useState();
    const[updatedData,setupdatedData]=useState({
      id:"",
      title:"",
      desc:""
    })
    const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};
    useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get("http://localhost:1000/api/v2/getalltasks",{
              headers,
          });
          console.log(response.data.data);
          setData(response.data.data);
      };
      fetch();    
  },[]);
  // console.log(Data.task);
  return (
    <>
     <div>
       <div className='w-full flex items-end px-4 py-2 justify-end'>
        <button onClick={()=>setinputdatashow("fixed")}>
          <IoAddCircleSharp className='text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
        </button>
       </div>
       { Data &&<Cards home={"true"} setinputdatashow={setinputdatashow} data={Data.task} setupdatedData={setupdatedData}/>}
      </div>
      <InputData inputdatashow={inputdatashow} setinputdatashow={setinputdatashow} updatedData={updatedData} setupdatedData={setupdatedData}/>
    </>
  )
}

export default AllTasks