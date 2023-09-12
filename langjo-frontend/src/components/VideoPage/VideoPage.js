import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        
        const res = await fetch(`api/videos/`);

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

        setVideoData(data.data); 
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    if (videoId) {
      
      fetchVideoData();
    }
  }, [videoId]);
  console.log(videoData);

  if (!videoData) {
    return (
      <div className="d-flex justify-content-center m-5 p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{videoData.title}</h1>
          {videoData && videoData.map((videoData) => (
            <p key={videoId}>{videoData.title}</p>
          ))}
          {/* <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item" controls>
              <source src={videoData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
