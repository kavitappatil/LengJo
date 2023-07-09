import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./Pages";
import "./App.css";
import SignUp from './Component/SignUp';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Pages />
      </div>
      <div className="App">
      <SignUp/>
      </div>
    </div>
  );
}

export default App;
