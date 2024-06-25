import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import SingleEvent from './Pages/SingleEvent'
import LocomotiveScroll from 'locomotive-scroll';
import Clubs from './Pages/Clubs'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/club' element={<Clubs/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='/singlePage' element={<SingleEvent/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
