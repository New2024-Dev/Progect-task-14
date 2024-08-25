import "./Searchgithub.css"
import { useState, useEffect, createContext, useContext } from "react"
import { AppContext } from "../../App"
import search from "/assets/Image/icon-search.svg"
import Usergithub from "../Usergithub/Usergithub"

function Searchgithub(){
    const { username, setUsername, setUserData,isDarkMode } = useContext(AppContext);

    async function Searchclicked(){
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUserData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    function Userchanged(event){
        setUsername(event.target.value)
    }

    return(
        <>
        <div id={isDarkMode === 'dark' ? 'Darksearchdiv' : 'Lightsearchdiv'}>
        <img src={search} id="imgsearch"/>
        <input id="inputsearch" type="text" placeholder="Search GitHub username..."
        value={username}
        onChange={Userchanged}></input>
        <button id="btnsearch"
        onClick={Searchclicked}>Search</button>
        </div>
<Usergithub></Usergithub>
</>
        
        
    )
}

export default Searchgithub