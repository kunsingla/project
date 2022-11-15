// import logo from './logo.svg';
import Navbar from './componenets/navbar.js'

import Post_displayer from './componenets/post_displayer.js';
import Posting_area from './componenets/posting_area';
import React  from 'react';

import './App.css';


function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
     <Posting_area/>
     <hr/>
     <Post_displayer array={[]}/>
    </div>

    </> 
    
  );
}

export default App;
