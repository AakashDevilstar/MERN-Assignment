import React from 'react'
import Home from './Pages/Home'
import { Router,Routes,Route,BrowserRouter } from 'react-router-dom'
import AllTasks from './Pages/AllTasks'
import ImportantTasks from './Pages/ImportantTasks'
import CompletedTasks from './Pages/CompletedTasks'
import Incompleted from './Pages/Incompleted'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<AllTasks/>}/>
              <Route path="/importantTasks" element={<ImportantTasks/>} />
              <Route path="/completedTasks" element={<CompletedTasks/>} />
              <Route path="/incompletedTasks" element={<Incompleted/>} />
            </Route>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
