import React from 'react'
import {CgNotes} from 'react-icons/cg';
import {MdLabelImportant} from 'react-icons/md';
import {FaCheckDouble} from 'react-icons/fa';
import {TbNotebookOff} from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data=[
        {
            title:'All Tasks',
            icons:<CgNotes/>,
            link:"/",
        },
        {
            title:'Important Tasks',
            icons:<MdLabelImportant/>,
            link:"/importantTasks",
        },
        {
            title:'Completed Tasks',
            icons:<FaCheckDouble/>,
            link:"/completedTasks",
        },
        {
            title:'InCompleted Tasks',
            icons:<TbNotebookOff/>,
            link:"/incompletedTasks",
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
            <Link to={items.link} key={i} className='my-2 flex items-center gap-2 p-2 rounded hover:bg-gray-600 hover:p-2 cursor-pointer'>{items.icons} {items.title}</Link>
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