import React from 'react';
import { Routes, Route } from "react-router-dom";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel";
import EnglishLevel from "./components/EnglishLevel/EnglishLevel";

import Home from './Home.js';


function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        <Route path="/beginnerlevel" element={<BeginnerLevel />} />
      </Routes>
    </div>
  );
}

export default Pages;
