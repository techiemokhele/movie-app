import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";

/* Fetch all videos related to $this = movie && TV series */
const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  /* Iterate through list until nothing is found */
  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.data.results?.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos?.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

/* Play distinct video using iframe */
const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  /* While video playing, show in 9:16 resolution */
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.data.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.data.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
