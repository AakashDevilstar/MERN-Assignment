import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-semibold'>Signup</div>
            <input
              type="username"
              placeholder='username'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="username"
            />
            <input
              type="email"
              placeholder='email'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="aakashraturi2001@gmail.com"
              required
            />
            <input
              type="password"
              placeholder='password'
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
              name="password"
            />
            <div className='w-full flex items-center justify-between'>
           <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded'>
                SignUp
            </button>
            <Link to="/login" className='text-gray-600 hover:text-gray-200'>Already Have an Account? login here</Link>
           </div>
        </div>
    </div>
  )
}

export default Signup