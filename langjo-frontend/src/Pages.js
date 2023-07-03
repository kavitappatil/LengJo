import React from 'react';
import { Routes, Route } from "react-router-dom";
import EnglishLevel from "./components/LevelTest/LevelTest";

import Home from './Home.js';


function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        
      </Routes>
    </div>
  );
}

export default Pages;
