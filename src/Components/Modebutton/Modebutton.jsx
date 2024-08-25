import "./Modebutton.css"
import { useState, useEffect, createContext, useContext } from "react"
import { AppContext } from "../../App"
import sun from "/assets/Image/icon-sun.svg"
import moon from "/assets/Image/icon-moon.svg"

function Modebutton(){
    const { isDarkMode, setIsDarkMode } = useContext(AppContext);

    function darklightclicked  () {
        setIsDarkMode((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))   
    }

    useEffect(() => {
        document.getElementById('root').setAttribute('data-isDarkMode', isDarkMode);
    }, [isDarkMode]);

    return(
        <div>

    <div id="btndiv">
        <span id={isDarkMode === 'dark' ? 'Darkfinder' : 'Lightfinder'}>devfinder</span>
        <button onClick={darklightclicked} id={isDarkMode === 'dark' ? 'Darkbtn' : 'Lightbtn'}>
      {isDarkMode === 'dark' ? (
    <>
      LIGHT <img src={sun} alt="Sun Icon" />
    </>
  ) : (
    <>
      DARK <img src={moon} alt="Moon Icon" />
    </>
  )}
    </button>
    </div>
    
    </div>
    )
}

export default Modebutton