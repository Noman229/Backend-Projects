import './share.css'
import { PermMedia, Label, Room, EmojiEmotions  } from '@mui/icons-material'

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="https://cdn-icons-png.flaticon.com/256/149/149071.png"  alt="Profile Image" />
                <input type="text" className='shareInput' placeholder="What's in your mind?" />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div>
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo & Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='SahreBtn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share