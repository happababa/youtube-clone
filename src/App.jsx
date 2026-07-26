import React,{ useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';

function App() {
  const[isSidebar,setIsSidebar]=useState(false);
  const handleSidebarToggle = () => {
    setIsSidebar(!isSidebar);
  };
  

  return (
    <div className="App">
      <Navbar onSidebarToggle={handleSidebarToggle} />
      {isSidebar && <Home />}
    </div>
  )
}

export default App;
