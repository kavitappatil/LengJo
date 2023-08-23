import React from "react";
import LevelTest from "./components/LevelTest/LevelTest";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel";
import BlocksCards from "./components/BlockCards/BlocksCards";
import VideoDetails from "./components/VideoDetail/VideoDetails.js";

function Home() {
  return (
    <div>
      <LevelTest />
      <BeginnerLevel />
      <BlocksCards />
      <VideoDetails />
    </div>
  );
}

export default Home;
