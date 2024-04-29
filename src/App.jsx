import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Newsboard from './components/newsboard'

function App() {
  const [category,setCategory]=useState("general")
  return (
    <>
     <Navbar setCategory={setCategory}/>
     <Newsboard category={category}/>
    </>
  )
}

export default App
