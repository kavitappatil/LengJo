import React from "react";
import LevelTest from "./components/LevelTest/LevelTest";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel";
import BlocksCards from "./components/BlockCards/BlocksCards";
import Hero from "./components/Hero/Hero";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function Home() {
  return (
    <div>
      <Hero />
      <LevelTest />
      <BeginnerLevel />
      <BlocksCards />
      <VideoDetails />
    </div>
  );
}

export default Home;
