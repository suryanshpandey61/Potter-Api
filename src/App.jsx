

import { Route,Routes } from 'react-router-dom';
import './App.css'
import Spell from './component/Spell';
import Book from './component/Book'
import Character from './component/Character';
import Navbar from './component/Navbar';
import Movie from './component/Movie';
import Modal from './component/Modal';


function App() {
  

  return (
    <>

      {/* navbar common hai isliye routes k bahar  rkhna visible in every path */}
      <Navbar path="/" />
      <Routes>
        
        {/* make routes for each component by usind browser router and route  */}
        <Route path="/" element={<Book/>}/>
        <Route path='/character' element={<Character/>}/>
        <Route path='/spell' element={<Spell/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/modal' element={<Modal/>}/>
        

      </Routes>
        

       
      
     
    </>
  )
}

export default App
