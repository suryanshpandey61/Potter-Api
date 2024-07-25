

import { Route,Routes } from 'react-router-dom';
import './App.css'
import Spell from './component/Spell';
import Book from './component/Book'
import Character from './component/Character';
import Navbar from './component/Navbar';
import Movie from './component/Movie';

function App() {
  

  return (
    <>

    
      <Navbar path="/" />
      <Routes>
        
        <Route path="/" element={<Book/>}/>
        <Route path='/character' element={<Character/>}/>
        <Route path='/spell' element={<Spell/>}/>
        <Route path='/movie' element={<Movie/>}/>

      </Routes>
        

       
      
     
    </>
  )
}

export default App
