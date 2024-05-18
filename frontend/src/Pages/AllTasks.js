import React from 'react'
import Cards from '../Components/Home/Cards'
import { IoAddCircleSharp } from 'react-icons/io5'
import InputData from '../Components/Home/InputData'

const AllTasks = () => {
  return (
    <>
     <div>
       <div className='w-full flex items-end px-4 py-2 justify-end'>
        <button>
          <IoAddCircleSharp className='text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
        </button>
       </div>
       <Cards home={"true"}/>
      </div>
      <InputData/>
    </>
  )
}

export default AllTasks