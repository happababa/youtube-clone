import React from 'react';
import './Homepage.css';
import { VIDEOS } from '../../assets/Mock'; // <-- Importing the mock data here

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-details">
        <img src={video.channelAvatar} alt={video.channelName} className="channel-avatar" />
        <div className="video-info">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">{video.channelName}</p>
          <p className="video-meta">
            {video.views} • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function YoutubeGrid({ isSidebarOpen }) {
  return (
    <div className={`youtube-grid-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="youtube-grid">
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}