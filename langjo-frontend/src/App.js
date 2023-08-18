import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./pages/Pages";


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
