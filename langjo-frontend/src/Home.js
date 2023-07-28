import React from "react";
import LevelTest from "./components/LevelTest/LevelTest";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel";
import BlocksCards from "./components/BlockCards/BlocksCards";

function Home() {
  return (
    <div>
      <LevelTest />
      <BeginnerLevel />
      <BlocksCards />
    </div>
  );
}

export default Home;
