import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {RxCross2} from 'react-icons/rx'

const InputData = ({inputdatashow,setinputdatashow, updatedData,setupdatedData}) => {
    const [Data,setData]=useState({title:"",desc:""});

    const change=(e)=>{
        const {name,value}=e.target;
        setData({...Data,[name]:value});
    }

    useEffect(()=>{
        setData({title:updatedData.title,desc:updatedData.desc});
    },[updatedData]);

    const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};

    const submitData=async()=>{
        if(Data.title==="" || Data.desc===""){
            alert("All field are req!!!!")
        }
        try{
            await axios.post("http://localhost:1000/api/v2/createtask",
                Data,
                {headers}
            )
            setData({title:"",desc:""});
            setinputdatashow("hidden")
        }
        catch(err){
            console.log(err);
        }
    }

    const UpdateData=async(id)=>{
        if(Data.title==="" || Data.desc===""){
            alert("All field are req!!!!")
        }
        try{
            await axios.put(`http://localhost:1000/api/v2/updatetask/${updatedData.id}`,
                Data,
                {headers}
            )
            setupdatedData({
                id:"",
                title:"",
                desc:""
            });
            setData({title:"",desc:""});
            setinputdatashow("hidden")
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
     <div className={`${inputdatashow} top-0 left-0 opacity-50 bg-gray-800 h-screen w-full`}></div>
     <div className={`${inputdatashow} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className='w-3/6 bg-gray-900 p-4 rounded'>
            <div className='flex justify-end'>
              <button className='text-2xl' onClick={()=>{
                setinputdatashow("hidden");
                setData({
                    title:"",
                    desc:"",
                })
                setupdatedData({
                    id:"",
                    title:"",
                    desc:""
                });
                }}><RxCross2/></button>
            </div>
            <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full  bg-gray-700 my-3'
              value={Data.title}
              onChange={change}
            />
            <textarea name="desc" cols="30" rows="10" placeholder='Enter Description....' className='px-3 py-2 rounded w-full bg-gray-700 my-3'
            value={Data.desc}
            onChange={change}
            />
            {updatedData.id===""?<button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'
             onClick={()=>submitData()}
            >
                Submit
            </button>:<button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'
             onClick={()=>UpdateData()}
            >
                Update
            </button>}
        </div>
     </div>
    </>
  )
}

export default InputData