import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Book() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://potterhead-api.vercel.app/api/books');

        setPost(response.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    loadBook();
  }, []);

  return (
    <div className='main-div w-[100vw] ml-[-30px] mb-[-20px] h-auto'>
      <Link to="/">
        <p className="text-2xl font-bold text-black pt-5">Books of Harry Potter Series</p>
      </Link>
      <div className='grid grid-cols-2 w-[700px] mx-auto  mt-5 gap-7'>
        {loading ? (
          <div class="loader"></div>
        ) : (
          post.map((item, index) => (
            <div key={index} className='flex flex-col w-[250px] gap-x-7 cursor-pointer mx-auto  rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black '>
              <img src={item.cover} alt="Harry Potter Images" className='rounded-md' />
              <p className='text-xl font-semibold '>{item.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Book;
