import React from "react";
import { Routes, Route } from "react-router-dom";
import EnglishLevel from "./components/EnglishLevel/EnglishLevel";

import Home from "./Home.js";
// import LevelTest from "./components/LevelTest/LevelTest";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        <Route path="/video-details/:id" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}

export default Pages;
