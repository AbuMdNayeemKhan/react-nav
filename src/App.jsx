import { useState } from 'react'
import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Linechart from './Components/Linechart/Linechart'

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-red-200'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
    </>
  )
}

export default App
