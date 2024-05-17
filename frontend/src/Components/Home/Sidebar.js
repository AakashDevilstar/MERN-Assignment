import React from 'react'

const Sidebar = () => {
    const data=[
        {
            title:'All Tasks',
        },
        {
            title:'Important Tasks',
        },
        {
            title:'Completed Tasks',
        },
        {
            title:'InCompleted Tasks',
        },
    ];
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>Aakash Raturi</h2>
            <h4 className='mb-1 text-gray-400'>aakashraturi2001@gmail.com</h4>
            <hr/>
        </div>
        <div>
        {data.map((items,i)=>(
            <div className='my-2'>{items.title}</div>
        ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2'>
                Logout
            </button>
        </div>
    </>
  )
}

export default Sidebar