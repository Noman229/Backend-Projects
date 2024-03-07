import './rightsidebar.css'
import { Users } from '../../dummyData'
import OnlineFriends from '../onlinefriends/OnlineFriends'
import CloseFriends from '../closefriends/CloseFriends'

const RightSidebar = ({profile}) => {
  
  const HomeRightSideBar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src="gift.png" className='birthdayGiftImage' alt="Gift Image" />
          <span className='birthdayGiftText'><b>Pola Foster</b> and <b>other friends</b> have a birthday today</span>
        </div>
        <img src="ad.png" className='adBanner' alt="adBanner" />
        <div className='onlineFriends'>
          <h4 className='onlineFriendsHeading'>Online Friends</h4>
          <ul className='onlineFriendsList'>
            {Users.map((u) => (
              <OnlineFriends key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    )
  }
  

  const ProfileRightSideBar = () => {
    return (
      <>
        <div className='profileBox'>
          <h4 className='rightbarTitle'>User Information</h4>
          <div className="rightbarInfo">
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Karachi</span>
          </div>
          <div className="rightbarInfo">
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Pakistan</span>
          </div>
          <div className="rightbarInfo">
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Married</span>
          </div>
        </div>
          <div>
          <h4 className='rightbarTitle'>User Friend Information</h4>
          <div className="rightbarFollowings">
            {Users.map((u) => (
              <div className='rightbarFollowing'>
              <img src={u.profilePicture} alt="" className='rightbarFollowingimg' />
              <span className='rightbarFollowingName'>{u.username}</span>
            </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightSidebar'>
      <div className='rightSidebarWrapper'>
        {profile ? <ProfileRightSideBar/> : <HomeRightSideBar/> }
      </div>  
    </div>
  )
}

export default RightSidebar