import "./Usergithub.css"
import { useState, useEffect, createContext, useContext } from "react"
import { AppContext } from "../../App"
import location from "/assets/Image/icon-location.svg"
import website from "/assets/Image/icon-website.svg"
import twitter from "/assets/Image/icon-twitter.svg"
import company from "/assets/Image/icon-company.svg"

function Usergithub(){
    const { userData, isDarkMode } = useContext(AppContext);

  if (!userData) return null;

  return (
        <div id={isDarkMode === 'dark' ? 'Darkallprofile' : 'Lightallprofile'}>

        <div>
            <img src={userData.avatar_url} id="catimg" />
        </div>

        <div id="datadiv">

        <div id="profildiv">
            <div id="namediv">
        <h1 id={isDarkMode === 'dark' ? 'Darkheadname' : 'Lightheadname'}
        >{userData.name}</h1>
        <p id="atcat">@{userData.login}</p>
        <p id="bio">{userData.bio || 'This profile has no bio'}</p>
        </div>
        <div id="creatdate">
            <p >{userData.created_at}</p>
        </div>
        </div>

        <div id={isDarkMode === 'dark' ? 'Darkfollowers' : 'Lightfollowers'}>
        <div>
          <p>Repos</p>
          <p id="reponum">{userData.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p id="followersnum">{userData.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p id="followingnum">{userData.following}</p>
        </div>
      </div>

      <div id={isDarkMode === 'dark' ? 'Darklinksdiv' : 'Lightlinksdiv'}>
        <div>
        <p><img src={location} /> {userData.location || 'Not Available'}</p>
        <p><img src={website}/> <a href={userData.blog || '#'} target="_blank">{userData.blog || 'No Blog'} </a></p>
        </div>

        <div>
            <p><img src={twitter} /> <a href={userData.html_url} target="_blank">@{userData.twitter_username || 'Not Available'}</a></p>
            <p><img src={company} /> {userData.company || 'Not Available'}</p>
        </div>
      </div>

        </div>

        

        </div>
    )
}

export default Usergithub