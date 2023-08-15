import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./Pages";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Pages />
      </div>
    </div>
  );
}

export default App;
