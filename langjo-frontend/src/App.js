<<<<<<< HEAD
=======
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./pages/Pages";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Pages />
      </div>
      <div className="App">
        <SignUp />
      </div>
      <div>
        <LogIn />
      </div>
    </div>
  );
}

export default App;
>>>>>>> 5d4698662bb501754c64ca79fbbfbfef1b5543fe
