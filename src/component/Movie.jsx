import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

function Movie() {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      const loadMovie = async () => {
        try {
          setLoading(true);
  
          const response = await axios.get('https://potterhead-api.vercel.app/api/movies');
  
          setPost(response.data);
  
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
  
      loadMovie();
    }, []);

    console.log(post)
  
    return (
      <div className='movie-div w-[100vw] ml-[-30px] mb-[-20px] '>
        <Link to="/movie">
          <p className="text-2xl font-bold pt-4">Movies & Directors of Harry Potter Series</p>
        </Link>
        <div className='grid grid-cols-3 w-[900px] mx-auto  mt-7 gap-7'>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            post.map((item, index) => (
              <div key={index} className='flex flex-col w-[250px]  mx-auto  rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black '>
                {/* <img src={item.image} alt="Harry Potter Images" className='' /> */}
                <p className='text-xl font-semibold '>{item.title}</p>
                <p className=' text-white'>Director- {item.directors}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default Movie