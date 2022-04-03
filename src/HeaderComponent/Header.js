import React from 'react'
import './Header.css';
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            {/* Avatar for logedin User */}
            <Avatar  
                className='header_avatar'
                alt='ahmad yaqoob'
                src=''//{user?.photoURL}
            />
            <AccessTimeIcon/>
            {/* Time Icon */}
        </div>
        <div className='header_search'>
            {/* Search Icon */}
            <SearchIcon/>
            {/* input */}
            <input placeholder='Slack Clone Search Icon'></input>
        </div>
        <div className='header_right'>
            {/* Help Icon */}
            <HelpOutlineIcon/>
        </div>
    </div>
  )
}
