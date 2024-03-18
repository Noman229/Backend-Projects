import './profile.css'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar'
import RightSidebar from '../../components/rightsidebar/RightSidebar'
import Timeline from '../../components/timeline/Timeline'
import { TopBar } from '../../components/topbar/TopBar'

const Profile = () => {
  return <>
    <TopBar/>
    <div className='profile'>
      <LeftSidebar/>
      <div className='profileRightSideBar'>
        <div className='profileRightSideBarTop'>
          <div className="profileCover">
            <img src="post/3.jpeg" className='profileCoverImg' alt="" />
            <img src="https://cdn-icons-png.flaticon.com/256/149/149071.png" className='profileUserImg' alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Noman Khan</h4>
            <span className="profileInfoDesc">I'm a full stack developer</span>
          </div>
        </div>
        <div className='profileRightSideBarBottom'>
          <Timeline/>
          <RightSidebar profile/>
        </div>
      </div>
    </div>
  </>
}

export default Profile