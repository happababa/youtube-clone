import React from 'react'
import './Sidebar.css';
import { 
  MdHome, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, 
  MdOutlineWatchLater, MdThumbUpOffAlt, MdLocalFireDepartment, 
  MdMusicNote, MdGamepad, MdNewspaper, MdSportsBaseball 
} from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';

const mainLinks = [
  { icon: <MdHome />, name: 'Home', isActive: true },
  { icon: <SiYoutubeshorts />, name: 'Shorts' },
  { icon: <MdSubscriptions />, name: 'Subscriptions' },
];

const secondaryLinks = [
  { icon: <MdOutlineVideoLibrary />, name: 'Library' },
  { icon: <MdHistory />, name: 'History' },
  { icon: <MdOutlineWatchLater />, name: 'Watch later' },
  { icon: <MdThumbUpOffAlt />, name: 'Liked videos' },
];

const exploreLinks = [
  { icon: <MdLocalFireDepartment />, name: 'Trending' },
  { icon: <MdMusicNote />, name: 'Music' },
  { icon: <MdGamepad />, name: 'Gaming' },
  { icon: <MdNewspaper />, name: 'News' },
  { icon: <MdSportsBaseball />, name: 'Sports' },
];

const Sidebar = () => {
  return (
    <aside className="youtube-sidebar">
      
      {/* Main Links */}
      <div className="sidebar-section">
        {mainLinks.map((link, index) => (
          <div key={index} className={`sidebar-item ${link.isActive ? 'active' : ''}`}>
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-text">{link.name}</span>
          </div>
        ))}
      </div>

      <hr className="sidebar-divider" />

      {/* Secondary Links (You) */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">You &gt;</h3>
        {secondaryLinks.map((link, index) => (
          <div key={index} className="sidebar-item">
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-text">{link.name}</span>
          </div>
        ))}
      </div>

      <hr className="sidebar-divider" />

      {/* Subscriptions Placeholder */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Subscriptions</h3>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="sidebar-item">
            <span className="sidebar-icon"><CgProfile /></span>
            <span className="sidebar-text">Channel {item}</span>
          </div>
        ))}
      </div>

      <hr className="sidebar-divider" />

      {/* Explore Links */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Explore</h3>
        {exploreLinks.map((link, index) => (
          <div key={index} className="sidebar-item">
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-text">{link.name}</span>
          </div>
        ))}
      </div>

    </aside>
  );
};
export default Sidebar