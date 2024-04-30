import React from 'react'
import { useEffect, useState } from 'react'

const Newsitem = ({category}) => {
    const [article,setArticle]=useState([]);
    console.log(article);
    const api_key="097c617958534fe4b1fb5f2a20e2a81e"
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`;
        fetch(url).then(res=>res.json()).then(data=>setArticle(data.articles))
    },[category])
  return (
    <>
    <div className="ml-8 mr-8 mt-8 grid grid-cols-3 gap-8">
      {article.map((news, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
        <img src={news.urlToImage} alt="No Image Found" className='h-[300px] w-[400px] rounded'/>
          <h2 className='mt-8 font-bold text-m text-red-500 text-justify'>{news.title}</h2>
          <p className='text-justify mt-4'>{news.description}</p>
          <div className='text-center mt-4'>
          < a href={news.url} className='px-4 py-2 bg-blue-500 rounded text-white'>Read More...</a>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Newsitem
