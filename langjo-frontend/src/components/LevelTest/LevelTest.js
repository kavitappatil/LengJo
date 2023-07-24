import React from "react";
import { Link } from "react-router-dom";
import "./LevelTest.css";

function LevelTest() {
  const handleLinkClick = () => {
    window.open("https://www.britishcouncil.org/exam", "_blank");
  };
  return (
    <div className="container mb- auto py-2 level-test-container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="row align-items-md-stretch">
          <div className="col-md-5">
            <div className="h-100 p-5 bg-body-tertiary border rounded-5">
              <h2 className="level-test-heading">Understand English Level</h2>
              <Link
                to="/englishlevel"
                className="btn btn-outline-dark align-items-center bg-body-tertiary border rounded-4 level-test-link"
              >
                Click Learn
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="h-100 p-5 bg-body-tertiary border rounded-5">
              <h2 className="level-test-heading">Free Online English Test</h2>
              <button
                className="btn btn-outline-dark align-items-center bg-body-tertiary border rounded-4 level-test-link"
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
  );
}

export default LevelTest;
