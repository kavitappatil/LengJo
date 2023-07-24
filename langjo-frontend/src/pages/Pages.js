import React from "react";
import { Routes, Route } from "react-router-dom";
import EnglishLevel from "./components/EnglishLevel/EnglishLevel";
import BlockCards from "./components/BlockCards/BlocksCards";
import Home from "./Home.js";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        <Route path="/blockcards" element={<BlockCards />} />
      </Routes>
    </div>
  );
}

export default Pages;
