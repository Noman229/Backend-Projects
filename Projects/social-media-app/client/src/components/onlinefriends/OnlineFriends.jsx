import './onlinefriends.css'

export default function OnlineFriends ({user}) {
  return (
    <li className='onlineFriendsListItem'>
        <div className='onlineFriendProfile'>
        <img src={user.profilePicture} className='onlineFriendImage' alt="" />
        <span className="onlineIcon">&nbsp;</span>
        </div>
        <span className="onlineFriendName">{user.username}</span>
    </li>
  )
}
