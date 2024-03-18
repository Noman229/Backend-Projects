import './timeline.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../dummyData'

const Timeline = () => {
  return (
    <div className='timeline'>
      <Share/>
      {Posts.map((item) => (
        <Post key={item.id} post={item} />
      ))}
      
    </div>
  )
}

export default Timeline