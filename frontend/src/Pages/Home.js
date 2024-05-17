import React from 'react'
import Sidebar from '../Components/Home/Sidebar'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
        <div className='w-1/6 border border-gray-500 rounded-xl p-3 flex flex-col justify-between'><Sidebar/></div>
        <div className='w-5/6 border border-gray-500 rounded-xl p-3'>Hello2</div>
    </div>
  )
}

export default Home