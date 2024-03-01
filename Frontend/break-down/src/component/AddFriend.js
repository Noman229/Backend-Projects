import { useState } from "react";
import FriendList from "./FriendList";

const AddFriend = () => {
    const [showForm, setShowForm] = useState(false);
    const [friendName, setfriendName] = useState('');
    const [friendImageUrl, setfriendImageUrl] = useState('');
    const [friendList, setfriendList] = useState([]);


    const toggleAddFriendForm = () => {
        setShowForm(!showForm);
    }
    
    const handleFriendNameChange = (event) => {
        setfriendName(event.target.value);
    };

    const handleFriendImageChange = (event) => {
        setfriendImageUrl(event.target.value);
    };
    
    const handleAddFriend = () => {
        if(friendName && friendImageUrl) {
            const newFriend = {
                name: friendName,
                image: friendImageUrl
            };
            setfriendList([...friendList, newFriend])
    
            // Clear the input fields
            setfriendName('');
            setfriendImageUrl('');
        }
    }

    return(
        <>
        {showForm && (
            <>
                <div className='first-comp'>

                    {friendList.length > 0 ? 
                    friendList.map(friend => (
                        <FriendList key={friend.name} name={friend.name} image={friend.image} /> 
                    ))
                    : 
                    ''}
                </div>
                <div className='second-comp'>
                    <div className="add-friend-form">
                        <div>
                            <label htmlFor="friendName">Friend Name</label>
                            <input type="text" name="friendName" id="friendName" value={friendName} onChange={handleFriendNameChange} />
                        </div>
                        <div>
                            <label htmlFor="friendImageUrl">Image URL</label>
                            <input type="text" name="friendImageUrl" id="friendImageUrl" value={friendImageUrl} onChange={handleFriendImageChange} />
                        </div>
                        <div>
                            <button type="button" className="btn" onClick={handleAddFriend}>Add</button>
                        </div>
                    </div>
                </div>
            </>
        )}
            
            <button type="button" className="btn" onClick={toggleAddFriendForm}>{showForm ? 'Close' : 'Add Friend'}</button>
        </>
    )
}

export default AddFriend;
