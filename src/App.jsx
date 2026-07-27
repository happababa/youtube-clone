import React,{ useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';
import YoutubeGrid from './Components/HomePage/HomaPage';

function App() {
  const[isSidebar,setIsSidebar]=useState(false);
  const handleSidebarToggle = () => {
    setIsSidebar(!isSidebar);
  };
  

  return (
    <div className="App">
      <Navbar onSidebarToggle={handleSidebarToggle} />
      {isSidebar && <Sidebar />}
      <YoutubeGrid isSidebarOpen={isSidebar} />

    </div>
  )
}

export default App;
