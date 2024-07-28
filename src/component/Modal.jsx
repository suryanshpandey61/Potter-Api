import React from 'react'

import { useState,useEffect } from 'react';


function Modal(props) {
 
    // whole page is act as an document like dom and css apply ke lie style tag ka use
    useEffect (()=> {

        // when modal opens then stop the scrooling 
        document.body.style.overflowY = "hidden";
        document.body.style.overflowX = "hidden";

        return () => {

            // when modal close return to its original ponsn
            document.body.style.overflowY = "scroll";
            document.body.style.overflowX = "scroll";
        }
        
    },[])




  return (
<>
  {/* top level div bg blur type wala  */}
  <div className="fixed top-0 overflow-hidden bottom-0 left-0 right-0 modal-bg opacity-25 overflow-y-hidden " onClick={props.closeModal}>
    <div className='fixed    h-auto border rounded-lg w-[500px] bg-white left-[400px] top-[100px] p-3'>
           <div className='mb-2'>
             <h1 className='text-xl underline  font-bold'>{props.book.title}</h1>
             <p className='text-md font-semibold'> Release Date:{props.book.release_date}</p>

             <p className='text-blue-800'>Summary : {props.book.summary}</p>
             <p className='text-md font-bold'> Total Pages: {props.book.pages}</p>
             <button onClick={props.closeModal} className='font-bold text-xl text-red-600 border-dashed border border-black px-4 py-1 mt-2'> Close</button>
           </div>
          


           <div>
            
           </div>
        </div>
  </div>
</>
  )
}

export default Modal