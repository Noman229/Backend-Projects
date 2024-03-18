import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <>
      <div className='TopBar'>
        <div className='topbarLeft'>
          <Link to="/" style={{textDecoration:"none"}}>
            <h1>Lamasocial</h1>
          </Link>
        </div>
        <div className='topbarCenter'>
          <Search/>
          <input placeholder='Search for friend, post or video' className='searchInput' />
        </div>
        <div className='topbarRight'>
          <div className='topBarLinks'>
            <span className="topBarLinkItem">Home</span>
            <span className="topBarLinkItem">Feed</span>
          </div>
          <div className='topBarIcons'>
              <div className="topBarIconsItem">
                <Person/>
                <span className='topBarIconBadge'>1</span> 
              </div>
              <div className="topBarIconsItem">
                <Chat/>
                <span className='topBarIconBadge'>1</span> 
              </div>
              <div className="topBarIconsItem">
                <Notifications/>
                <span className='topBarIconBadge'>1</span> 
              </div>
          </div>
          <div className='profileImage'>
            <img src="https://cdn-icons-png.flaticon.com/256/149/149071.png" alt="Profile Image" />
          </div>
        </div>
      </div>
    </>
  )
}
