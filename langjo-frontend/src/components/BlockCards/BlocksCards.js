import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./BlockCard.css";

function BlocksCards() {
  const handleLinkClick = (url) => {
    window.open(url);
  };

  const handleListeningSkillsClick = () => {
    handleLinkClick("https://www.ielts-blog.com/ielts-listening/");
  };

  const handleGrammarClick = () => {
    handleLinkClick("https://www.ielts-blog.com/?s=grammar");
  };

  const handleArrowClick = (url) => {
    handleLinkClick(url);
  };

  return (
    <div className="card">
      <div className="block-title-container">
        <h1 className="card-title">Blocks</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="row rounded-3 px-5 gx-0 ">
        <div className="col-6">
          <div className="container mb-2 bg-cl">
            <div className="card-body px-5 mx-1 rounded-3 ">
              <h5 className="card-title px-5 mx-3"> BLOCK _____ </h5>
              <div className="d-flex flex-row px-3">
                <p
                  className="card-text h-100  w-100 px-5"
                  onClick={handleListeningSkillsClick}
                >
                  How to improve listening skills in English: Tips, techniques,
                  and resources
                </p>

                <div
                  className="arrow-container mb-5 pe-2"
                  onClick={() =>
                    handleArrowClick(
                      "https://www.ielts-blog.com/ielts-listening/"
                    )
                  }
                >
                  <div className="circle ">
                    <BsArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="container bg-cl">
            <div className="card-body px-5 mx-1 rounded-3">
              <h5 className="card-title px-5 mx-3"> BLOCK _____ </h5>
              <div className="d-flex flex-row px-3">
                <p className="card-text  px-5 " onClick={handleGrammarClick}>
                  5 Steps to improve your understanding of English Grammar
                </p>
                <div
                  className="arrow-container  mb-5 pe-2"
                  onClick={() =>
                    handleArrowClick("https://www.ielts-blog.com/?s=grammar")
                  }
                >
                  <div className="circle ">
                    <BsArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlocksCards;
