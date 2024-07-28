import React from 'react'
import Book from './Book'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='  bg-slate-800 w-[1400px] ml-[-160px] '>
    <div className='text-white w-[500px] mt-[-35px]  mx-auto text-3xl gap-x-6 cursor-pointer  h-[50px]  flex font-bold '>
             <Link to="/">
                          <button className=' mt-2 '>Books</button>
             </Link>

             <Link to="/character">
               <button className='ml-14 mt-2'>Characters</button>
             </Link>

             <Link to="/spell">
               <button className='ml-14 mt-2'>Spell</button>
             </Link>

             <Link to="/movie">
               <button className='ml-14 mt-2'>Movies</button>
             </Link>
    </div>
    </div>
  )
}

export default Navbar