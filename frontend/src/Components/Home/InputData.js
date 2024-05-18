import React from 'react'
import {RxCross2} from 'react-icons/rx'

const InputData = () => {
  return (
    <>
     <div className='fixed top-0 left-0 opacity-50 bg-gray-800 h-screen w-full'></div>
     <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-full'>
        <div className='w-3/6 bg-gray-900 p-4 rounded'>
        <div><RxCross2/></div>
            <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full  bg-gray-700 my-3'/>
            <textarea name="desc" cols="30" rows="10" placeholder='Enter Description....' className='px-3 py-2 rounded w-full bg-gray-700 my-3'/>
            <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'>
                Submit
            </button>
        </div>
     </div>
    </>
  )
}

export default InputData