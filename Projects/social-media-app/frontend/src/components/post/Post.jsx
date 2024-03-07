import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'
import { useState } from 'react'


const Post = ({post}) => {
    const [like, setLiked] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLiked(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postItem">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="Profile Image" />
                        <div>
                            <span className="postUserName">{Users.filter((u)=> u.id === post?.userId)[0].username}</span>
                            <span className="postDate">{post.date}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post?.desc}</div>
                    <img src={post.photo} className='postImage' alt="Post Image" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="like.png" className='postIcons' onClick={likeHandler} alt="Like Icon" />
                        <img src="heart.png" className='postIcons' onClick={likeHandler} alt="Love Icon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post