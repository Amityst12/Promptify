import { useState } from 'react'
import './App.css'
import "./index.css"

import { MobileMenu } from './components/MobileMenu.jsx';
import { Navbar } from './components/Navbar.jsx';
import { LoadingScreen}  from "./components/LoadingScreen.jsx";
import { Home } from './components/sections/Home.jsx';
import { BetterPrompt } from './components/sections/BetterPrompt.jsx'


function App() {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);

  return( 
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
        <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0" } bg-white text-gray-100`}
          >
            <Navbar menuOpen ={menuOpen} setMenuOpen ={setMenuOpen}/>
            <MobileMenu menuOpen ={menuOpen} setMenuOpen ={setMenuOpen}/>
            <Home/>
            <BetterPrompt/>
        </div>
    </>
    );
}


export default App
