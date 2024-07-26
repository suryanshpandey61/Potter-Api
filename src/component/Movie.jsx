import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

function Movie() {

  //  loading k lie state variable taki jbtk data fetch na ho loading screen show ho 
    const [loading, setLoading] = useState(false);

    // data hm apna yha pr store rhe 
    const [post, setPost] = useState([]);
  
    // using useeffect for call the api 
    useEffect(() => {

      // fn bnaya calling api 
      const loadMovie = async () => {

        // try catch block ka use isliye taki error kha pr aa rh pta chle 
        // agr sb shi h to try block me jayega otherwise catch me 
        try {
          setLoading(true);
  
          //api s aya data response me save  
          const response = await axios.get('https://potterhead-api.vercel.app/api/movies');
  
          // response wale data ko setpost me save 
          setPost(response.data);
  
          setLoading(false);
        }
         catch (err) {
          console.log(err);
        }
      };
     
      // call fn 
      loadMovie();
    }, []);
    
    // console kia taki pta chle ki data fetch ho rh api se successfully 
    console.log(post)
  
    return (
      <div className='movie-div w-[100vw] ml-[-30px] mb-[-20px] '>


        <Link to="/movie">
          <p className="text-2xl font-bold pt-4">Movies & Directors of Harry Potter Series</p>
        </Link>


        <div className='grid grid-cols-3 cursor-pointer w-[900px] mx-auto  mt-7 gap-7'>
          {loading ?
           (
            <div class="loader"></div>
          ) :
           (
            post.map((item, index) => (
              <div key={index} className='flex flex-col w-[250px] hover:shadow-md hover:shadow-black hover:border-none mx-auto  rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black '>
               <img src={item.poster} alt="Harry Potter Images" className='rounded-md' />
                <p className='text-xl font-semibold '>{item.release_date}</p>
                <p className=' text-white'>Director- {item.directors}</p>
                
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default Movie