import Newsitem from './newsitem';

const Newsboard = ({category}) => {
   
  return (
    <div>
      <h2 className="mt-6 text-center text-4xl ">Latest <span className="text-3xl mr-2 bg-red-600 text-white p-2 rounded  leading-none ">News</span></h2>
      <Newsitem category={category}/>           
    </div>
  )
}   

export default Newsboard
