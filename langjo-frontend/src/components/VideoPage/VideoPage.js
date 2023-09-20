import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const VideoPage = () => {
  const videoId = useParams();
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/videos/beginners-level/${videoId.id}`
        );
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setVideoData(data.data);
      } catch (error) {
        console.error("Failed to fetch video data:", error);
      }
    };
    fetchVideoData();
  }, [videoId]);
  if (!videoData) {
    return (
      <div className="d-flex justify-content-center m-5 p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const videoGet =
    (videoData.videoUrl && videoData.videoUrl.split("/").pop()) || "";
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{videoData.title}</h1>
          <p>{videoData.desc}</p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title={videoData.title}
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${videoGet}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
