import "./App.css";
// import LogIn from "./components/LogIn/LogIn";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./pages/Pages";
// import SignUp from "./components/SignUp/SignUp";

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
