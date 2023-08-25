import React from "react";
import LevelTest from "./components/LevelTest/LevelTest";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel";
import BlocksCards from "./components/BlockCards/BlocksCards";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <LevelTest />
      <BeginnerLevel />
      <BlocksCards />
      <Footer />
    </div>
  );
}

export default Home;
