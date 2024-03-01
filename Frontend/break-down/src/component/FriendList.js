
const FriendList = (props) => {
    
    return(
        <>
            <div className="list-item">
                <div className="item-image">
                    <img src={props.image} width={60} height={60} alt="" />
                </div>
                <div className="item-detail">
                    <h2>{ props.name }</h2>
                    <p>Tumhe Zain Amin ko 10$ dene hain</p>
                </div>
                <div className="item-btn">
                    <a href="#" className="btn">Select</a>
                </div>
            </div>
        </>
    )
}

export default FriendList;
