import React from 'react'
import Sidebar from '../Components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
        <div className='w-1/6 border border-gray-500 rounded-xl p-3 flex justify-between flex-col'><Sidebar/></div>
        <div className='w-5/6 border border-gray-500 rounded-xl p-3'><Outlet/></div>
    </div>
  )
}

export default Home