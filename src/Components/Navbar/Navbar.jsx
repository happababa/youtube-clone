import React,{useState} from 'react';
import './Navbar.css';

const Navbar = ({onSidebarToggle}) => {

  const [userPic, setUserPic] = useState('');
  const[navbarModel,setNavbarModel]=useState(false);
  const handleProfileClick = () => {
    setNavbarModel(!navbarModel);
  };
  

  return (
    <nav className="navbar">
      
      {/* Left Section: Menu & Logo */}
      <div className="nav-left">
        <img 
          onClick={onSidebarToggle}
          className="menu-icon" 
          src="https://placehold.co/24x24/transparent/333333?text=☰" 
          alt="Menu" 
        />
        <img 
          className="logo" 
          src="https://placehold.co/90x20/transparent/FF0000?text=YOUTUBE+LOGO" 
          alt="YouTube Logo" 
        />
      </div>

      {/* Middle Section: Search Bar & Mic */}
      <div className="nav-middle">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search-btn">
            <img 
              src="https://placehold.co/16x16/transparent/333333?text=🔍" 
              alt="Search" 
            />
          </button>
        </div>
        <button className="mic-btn">
          <img 
            src="https://placehold.co/16x16/transparent/333333?text=🎤" 
            alt="Microphone" 
          />
        </button>
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="nav-right">
        <img 
          className="icon" 
          src="https://placehold.co/24x24/transparent/333333?text=➕" 
          alt="Create" 
        />
        <img 
          className="icon" 
          src="https://placehold.co/24x24/transparent/333333?text=🔔" 
          alt="Notifications" 
        />
        <img 
          src={userPic || "https://placehold.co/32x32/cccccc/ffffff?text=U"}
          className="user-profile" 
          alt="User Profile"
          onClick={() => setNavbarModel(!navbarModel)} 
        />
        {navbarModel &&
        <div className='navbar-model'>
          <div className='navbar-model-option'>
            Profile
            </div>
            <div className='navbar-model-option'>
            Logout
            </div>
            <div className='navbar-model-option'>
            Login
            </div>
        </div> }
      </div>

    </nav>
  );
};

export default Navbar;