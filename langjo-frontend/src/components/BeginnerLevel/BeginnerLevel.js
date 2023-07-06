//AIzaSyA5-eiqS5cVAwKx1Yi2M9okUTlGfCCZWGo
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BeginnerLevel.css";

function BeginnerLevel() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getRandomVideos();
  }, []);

  const getRandomVideos = async () => {
    const API_KEY = "AIzaSyA5-eiqS5cVAwKx1Yi2M9okUTlGfCCZWGo";
    const maxResults = 3;

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=beginner%20english%20learning&key=${API_KEY}`
      );

      const videoItems = response.data.items;
      setVideos(videoItems);
    } catch (error) {
      console.error(error);
    }
  };

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
        <div className="card-group  gap-5">
          {videos.map((video) => (
            <div
              className="card  video-card gap-5 rounded-5"
              key={video.id.videoId}
            >
              <div className="video-overlay object-fit-fill ">
                <div className="video-wrapper ratio ratio-1x1 rounded-4">
                  <i className="bi bi-play-circle"></i>
                  <iframe
                    title={video.id.videoId}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeginnerLevel;
