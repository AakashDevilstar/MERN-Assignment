import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../Components/Home/Cards';

const Incompleted = () => {
  const [Data,setData]=useState();
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`,};
    useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get("http://localhost:1000/api/v2/getincomptasks",{
              headers,
          });
          console.log(response.data.data);
          setData(response.data.data);
      };
      fetch();    
  },[]);
  return (
    <Cards home={"false"} data={Data} />
  )
}

export default Incompleted