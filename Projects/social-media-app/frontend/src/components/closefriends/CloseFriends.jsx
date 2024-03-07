import './closefriends.css'

export default function CloseFriends ({user}) {
  return (
    <li className='friendListItem'>
        <img src={user.profilePicture} alt="Friend Item" />
        <span className='friendName'>{user.username}</span>
    </li>
  )
}
