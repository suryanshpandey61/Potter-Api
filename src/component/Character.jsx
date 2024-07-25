import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';
function Character() {

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://potterhead-api.vercel.app/api/characters');

        setPost(response.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    loadCharacter();
  }, []);

  return (
    <div className='character-div w-[100vw] ml-[-30px] mb-[-20px] h-auto'>
      <Link to="/character">
        <p className="text-2xl font-bold pt-5">Characters In Harry Potter Series</p>
      </Link>
      <div className='grid grid-cols-3 w-[900px] mx-auto  mt-5 gap-7'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          post.map((item, index) => (
            <div key={index} className='flex flex-col w-[250px]  mx-auto  rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black '>
              <img src={item.image} alt="Harry Potter Images" className='rounded-md' />
              <p className='text-xl font-semibold '>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Character