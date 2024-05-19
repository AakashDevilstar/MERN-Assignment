import React, { useEffect, useState } from 'react'
import Cards from '../Components/Home/Cards'
import axios from 'axios';

const CompletedTasks = () => {
  const [Data,setData]=useState();
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};
    useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get("https://mern-assignment-2geqo2vun-aakashs-projects-a0b7af11.vercel.app/api/v2/getcomptasks",{
              headers,
          });
          console.log(response.data.data);
          setData(response.data.data);
      };
      fetch();    
  },[]);
  return (
    <div>
        <Cards home={"false"} data={Data}/>
    </div>
  )
}

export default CompletedTasks