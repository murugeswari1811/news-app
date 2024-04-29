import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
       
<div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
  <img src="https://png.pngtree.com/background/20230823/original/pngtree-revolutionizing-the-world-of-business-and-technology-a-breaking-news-template-picture-image_4787481.jpg" class="absolute top-0 left-0 min-h-full w-full ob" alt=""/>
  <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
    <div class="col-span-6">
      <h1 class="text-white font-extrabold text-5xl mb-8">Search your favourite news here...</h1>
      
      <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border-4 border-white hover:bg-white hover:bg-opacity-10" onClick={()=>navigate("/news")}>Get started</button>
    </div>
  </div>
</div>



    </div>
  )
}

export default Home
