import { useState, useEffect, createContext, useContext } from "react"
import './App.css'
import Usergithub from "./Components/Usergithub/Usergithub"
import Modebutton from "./Components/Modebutton/Modebutton"
import Searchgithub from "./Components/Searchgithub/Searchgithub"



export const AppContext = createContext(null);

function App() {

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState('dark');
  

  return (
    <AppContext.Provider
    value={{ username, setUsername, userData, setUserData, isDarkMode, setIsDarkMode }}>
    <main>
      <Modebutton></Modebutton>
      <Searchgithub></Searchgithub>

    </main>
    </AppContext.Provider>
  )
}

export default App
