// import logo from './logo.svg';
import Navbar from "./componenets/navbar.js";
import Home from "./componenets/HomePage";
import React from "react";
import SearchList from "./componenets/searchPage.js";
import { BrowserRouter as Router,
   Routes,
   Route} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route strict path="/" element={<Home arrays={['pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1','pofaofkafo1']} />} /> 
          <Route strict path="/search" element={<SearchList />} />
         </Routes>
      </Router>
      </>
  );
}

export default App;
