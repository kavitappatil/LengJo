import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Pages />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
