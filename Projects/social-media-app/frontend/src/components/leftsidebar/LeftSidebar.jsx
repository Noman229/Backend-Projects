import './leftsidebar.css'
import { Feed, Chat, PlayCircle, Group, Bookmark, HelpOutline, Work, Event, School } from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriends from '../closefriends/CloseFriends'

const LeftSidebar = () => {
  return (
    <div className='leftSidebar'>
      <ul className='sidebarLinksList'>
        <li className='sidebarListItem'>
          <Feed/> 
          <span className='sidebarListItemText'>Feed</span>
        </li>
        <li className='sidebarListItem'>
          <Chat/> 
          <span className='sidebarListItemText'>Chat</span>
        </li>
        <li className='sidebarListItem'>
          <PlayCircle/> 
          <span className='sidebarListItemText'>Videos</span>
        </li>
        <li className='sidebarListItem'>
          <Group/> 
          <span className='sidebarListItemText'>Group</span>
        </li>
        <li className='sidebarListItem'>
          <Bookmark/> 
          <span className='sidebarListItemText'>Bookmark</span>
        </li>
        <li className='sidebarListItem'>
          <HelpOutline/> 
          <span className='sidebarListItemText'>Help</span>
        </li>
        <li className='sidebarListItem'>
          <Work/> 
          <span className='sidebarListItemText'>Jobs</span>
        </li>
        <li className='sidebarListItem'>
          <Event/> 
          <span className='sidebarListItemText'>Event</span>
        </li>
        <li className='sidebarListItem'>
          <School/> 
          <span className='sidebarListItemText'>Courses</span>
        </li>
      </ul>
      <button className='showMore'>Show More</button>
      <hr />
      <ul className='friendList'>
`      {Users.map((u) => (
          <CloseFriends key={u.id} user={u} />
        ))}`
      </ul>
    </div>
  )
}

export default LeftSidebar