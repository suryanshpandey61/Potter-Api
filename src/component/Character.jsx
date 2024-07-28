import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';
import newImage from "../assets/harry.jpeg"
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
        <p className="text-2xl font-bold pt-5 text-white">Characters In Harry Potter Series</p>
      </Link>
      <div className='grid grid-cols-3 w-[900px] mx-auto  mt-5 gap-7'>
        {loading ? (
          <div class="loader"></div>
        ) : (
          post.map((item, index) => (
            <div key={index} className='flex flex-col w-[250px]  border-white hover:shadow-lg hover:shadow-rose-400 mx-auto  rounded-xl p-3 hover:scale-[1.07] cursor-pointer transition-all duration-500 border  '>
           
             <img 
                src={item.image || newImage } 
                alt="Harry Potter Images" 
                className='rounded-md' 
              />      
            
             
             
              {/* <img src={(item.image) || ("")} alt="Harry Potter Images" className='rounded-md' /> */}
              <p className='text-xl font-semibold text-sky-400'>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Character