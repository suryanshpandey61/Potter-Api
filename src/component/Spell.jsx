import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';

function Spell() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const loadSpell = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://potterhead-api.vercel.app/api/spells');

        setPost(response.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    loadSpell();
  }, []);

  return (
    <div className='spell-div w-[100vw] ml-[-30px] mb-[-20px] h-auto'>
      <Link to="/character">
        <p className="text-2xl font-bold pt-5">Powers Of All Characters</p>
      </Link>
      <div className='grid grid-cols-3 w-[900px] mx-auto  mt-5 gap-7'>
        {loading ? (
          <div class="loader"></div>
        ) : (
          post.map((item, index) => (
            <div key={index} className='flex flex-col w-[250px] shadow-md shadow-black hover:shadow-white   mx-auto cursor-pointer  rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black '>
               <p className='text-xl font-semibold text-blue-600 '>{item.name}</p>
              <p className='text-white  '>Spell - {item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Spell