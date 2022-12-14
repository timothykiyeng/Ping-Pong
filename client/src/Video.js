import React from "react";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";

export default function Video({ videoData }) {

  const {title, category, description, video } = videoData

  return (
    <div className="video-container">
      <Link exact to="*" className="literally-back-button">Back</Link>
      <YoutubeEmbed videoData={video} />
      <h2 className="video-title" >{title}</h2>
      <h5 className="video-category">{category}</h5>
      <p className="video-description">{description}</p>
    </div>
  );
}
