import React from "react";
import "./VideoDetails.css";

function VideoDetails() {
  return (
    <div className="container w-75 py-5 ">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Introduction
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Do the preparation task first. Then listen to the audio and do the
              exercises.
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Words to Learn and Remember
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Transcript
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse w-75 "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Intro </strong>welcome to lovely english stories thank you
              for stopping by this story is perfect for beginner learners let's
              start english story a <br />{" "}
              <strong>The Birthday Party 2 </strong>the birthday party it is a
              special day for emma and her twin sister lauren it is their
              birthday lauren is the oldest twin she was born six minutes before
              emma today they are turning 21. lauren is happy about it but emma
              is not emma is enjoying being a university student and does not
              want to feel old lauren can't wait to finish university and wants
              to be an adult you are only 21 wants so lauren and emma have
              planned a special day they will have pancakes for breakfast with
              their family they always have pancakes on their birthday it is a
              family tradition emma and lauren's dad makes amazing pancakes he
              always serves them with fresh fruit after breakfast they will
              visit their grandparents both emma and lauren are very close to
              their grandparents then they will go to the supermarket to pick up
              some very important birthday supplies at their party they will
              have a typical british buffet with sandwiches sausage rolls cakes
              crisps and biscuits they have invited a lot of people to their
              party so they will have vegan and vegetarian options too they also
              have party bags for the children with little toys inside emma's
              friend is a baker so she is going to make the girls a very special
              21st birthday cake it will be multi-colored and have sweets inside
              ever since they were little girls they have wanted a cake like
              this so why not have one on their 21st birthday emma's friend will
              also make some cupcakes everyone loves cupcakes they have not
              booked a dj they will make their own party playlist on youtube or
              spotify that way they can choose their favorite music they have
              invited over 50 people to their party the guests are their friends
              family members and work colleagues from their part time jobs they
              hope that everyone will get on and have a good time they will have
              the party in their parents garden luckily they live in the
              countryside and so they have a huge garden they have a big gazebo
              at the bottom of the garden so if the weather is bad they will
              have somewhere to go emma has organized some party games and
              lauren is in charge of the drinks she has ordered a mix of
              alcoholic and non alcoholic drinks lauren has also ordered some
              lights balloons and birthday decorations for the garden they have
              invited their parents neighbors so they don't have to worry about
              making too much noise they are really excited now they just have
              to organize everything before the guests arrive they have three
              hours before the party starts they start to make the food for the
              buffet and their mum and dad organize the garden three hours later
              lauren and emma are ready just in time for their first guests
              arriving they have decorated the garden made the food and set up
              the dance area with music and lights they have put on new outfits
              and have their first glass of champagne with their friends luckily
              emma and lauren were born in july so the weather is warm and sunny
              for now the guests enjoy the cakes and food and their family dance
              to the music the party is a huge success lauren and emma's parents
              have organized a surprise for them
              <br /> <strong>Fireworks</strong> fireworks as soon as it is dark
              emma and lauren's parents ask everyone to walk to the end of the
              garden and tell them to look up towards the sky lauren and emma
              are surprised when the sky lights up with beautiful fireworks the
              display is beautiful just as it ends it starts to rain a little
              typical english weather luckily they have the gazebo some of the
              guests go inside the house and the others party under the gazebo
              until it's time to go home we hope you enjoyed this lovely english
              story thank you for stopping by don't forget to like subscribe and
              share you
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Audio
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        {/* ----------------- */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Quiz
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* <-- Carousel wrapper --> */}
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active carousel-item-start">
                    <div>
                      How old are Emma and Lauren turning in the story? a) 18{" "}
                      <br />
                      b) 21 <br />
                      c) 25 <br />
                      d) 30
                    </div>
                  </div>
                  <div className="carousel-item carousel-item-next carousel-item-start">
                    <svg
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="400"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Second slide"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#666"></rect>
                      <text x="50%" y="50%" fill="#444" dy=".3em">
                        Second slide
                      </text>
                    </svg>
                  </div>
                  <div className="carousel-item">
                    <svg
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="400"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Third slide"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#555"></rect>
                      <text x="50%" y="50%" fill="#333" dy=".3em">
                        Third slide
                      </text>
                    </svg>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoDetails;
