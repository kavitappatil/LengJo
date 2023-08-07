import React from "react";
import LevelTest from "./components/LevelTest/LevelTest";
import BeginnerLevel from "./components/BeginnerLevel/BeginnerLevel"; 
import QandA from "./components/QandA/QandA";
import BlocksCards from "./components/BlockCards/BlocksCards";


function Home() {
  return (
    <div>
      <LevelTest />
      <BeginnerLevel />
      <BlocksCards />
      <QandA />
    </div>
  );
}

export default Home;
