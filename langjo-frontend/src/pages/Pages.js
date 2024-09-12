import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home.js";
import SignUp from "../components/SignUp/SignUp";
import LogIn from "../components/LogIn/LogIn";
import BeginnerLevel from "../components/BeginnerLevel/BeginnerLevel";
import EnglishLevel from "../components/EnglishLevel/EnglishLevel";
import BlockCards from "../components/BlockCards/BlocksCards";
import VideoPage from "../components/VideoPage/VideoPage";
import QandA from "../components/QandA/QandA";



function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        <Route path="/beginnerlevel" element={<BeginnerLevel />} />
        <Route path="/blockcards" element={<BlockCards />} />
        <Route path="/video-page/:id" element={<VideoPage />} />
        <Route path="/video-page/:id/QandA" element={<QandA />} />
      </Routes>
    </div>
  );
}
export default Pages;
