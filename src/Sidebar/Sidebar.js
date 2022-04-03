import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from '../SidebarOptions/SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h2>Clever Programmer</h2>
                <h3 style={{margin: 0, padding: 0}}>
                    <FiberManualRecordIcon/>
                    Ahmad Yaqoob
                </h3>
            </div>
            <CreateIcon/>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="cOMM"/>
        <SidebarOption Icon={InboxIcon} title="Threads"/>
        <SidebarOption Icon={DraftsIcon} title="Threads"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Threads"/>
        <SidebarOption Icon={PeopleAltIcon} title="Threads"/>
        <SidebarOption Icon={AppsIcon} title="Threads"/>
        <SidebarOption Icon={FileCopyIcon} title="Threads"/>
        <SidebarOption Icon={ExpandLessIcon} title="Threads"/>
        
    </div>
  )
}
