import React from "react";
import { Link } from "react-router-dom";
import "./LevelTest.css";
import iconGif from "./english-level-icon.gif";
import todoGif from "./todo-list.gif";

function LevelTest() {
  const handleLinkClick = () => {
    window.open("https://www.britishcouncil.org/exam", "_blank");
  };
  return (
    <div className="container mt-auto level-test-container h-100 w-100">
      <div className="row d-flex justify-content-center align-items-center h-100 w-100">
        <div className="row justify-content-center w-100">
          <div className=" col-lg-3">
            <div className="card rounded-4 w-100 custom-card">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={iconGif} alt="English Level Icon" className="icon" />
                <h5 className="card-title level-test-heading">
                  Understand English Level
                </h5>
                <Link
                  to="/englishlevel"
                  className="btn btn-outline-dark align-items-center bg-body-tertiary border rounded-4 level-test-button"
                >
                  Click Learn
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-3">
            <div className="card rounded-4 w-100 custom-card">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={todoGif} alt="Todo List Icon" className="icon" />
                <h5 className="card-title level-test-heading">
                  Free Online English Test
                </h5>
                <button
                  className="btn btn-outline-dark align-items-center bg-body-tertiary border rounded-4 level-test-button"
                  type="button"
                  onClick={handleLinkClick}
                >
                  Take a test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTest;
