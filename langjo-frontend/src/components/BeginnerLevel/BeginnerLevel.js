import React, { useEffect, useState } from "react";

import "./BeginnerLevel.css";

function BeginnerLevel() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/videos/beginners-level"
        );
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setVideos(data.data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="section ">
      <div className="card-body px-5 my-5 cstm d-grid gap-5">
        <h5 className="card-title my-5">----- START LEARNING</h5>
        <h1 className="card-title">Beginner Level</h1>
        <p>
          In this beginner level, we've curated a collection of informative and
          engaging video tutorials to help you grasp the fundamental concepts of
          learning curve...
        </p>
        <div className="d-flex justify-content-center card-group gap-3 border border-0 row">
          {getRandomSubset(videos, 4).map((video) => {
            const videoId = video.videoUrl.split("/").pop(); // Extract video id from videoUrl
            return (
              <div
                className="card video-card gap-2 object-fit-fill rounded-5 border border-0 col-6 col-sm-4 "
                key={video._id}
              >
                <div className="video-overlay  border border-0">
                  <div className="video-wrapper ratio ratio-1x1 rounded-4 border border-0">
                    <iframe
                      title={video.title}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  
                  </div>
                </div>
                <div className="d-grid gap-1 col-5 mx-auto px-3 border border-0">
                  <a
                    className="btn btn-secondary sign_up-btn rounded-5 py-2 border border-0"
                    href={`/video-page/${video._id}`}
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Function to get a random subset of items from an array
function getRandomSubset(array, size) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

export default BeginnerLevel;
